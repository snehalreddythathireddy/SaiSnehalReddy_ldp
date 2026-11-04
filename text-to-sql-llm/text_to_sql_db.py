
import re
import sqlite3
from pathlib import Path

from langchain_openai import ChatOpenAI

# 1. Create the SQLite database
DB_PATH = Path(__file__).resolve().parent / "sales.db"

with sqlite3.connect(DB_PATH) as conn:
    conn.execute("""
        CREATE TABLE IF NOT EXISTS products (
            product_id INTEGER PRIMARY KEY,
            product_name TEXT NOT NULL
        )
    """)

    conn.execute("""
        CREATE TABLE IF NOT EXISTS sales (
            sale_id INTEGER PRIMARY KEY,
            product_id INTEGER NOT NULL,
            quantity INTEGER NOT NULL,
            unit_price REAL NOT NULL,
            FOREIGN KEY (product_id)
                REFERENCES products(product_id)
        )
    """)

    # Reset sample data for repeatable testing
    conn.execute("DELETE FROM sales")
    conn.execute("DELETE FROM products")

    conn.executemany(
        "INSERT INTO products VALUES (?, ?)",
        [
            (1, "Laptop"),
            (2, "Phone"),
            (3, "Headphones"),
            (4, "Monitor"),
            (5, "Keyboard"),
        ],
    )

    conn.executemany(
        "INSERT INTO sales VALUES (?, ?, ?, ?)",
        [
            (1, 1, 2, 500),
            (2, 2, 8, 150),
            (3, 3, 10, 40),
            (4, 1, 1, 500),
            (5, 4, 4, 200),
            (6, 5, 10, 25),
            (7, 2, 2, 150),
        ],
    )


# 2. Connect to the LM Studio model
model = ChatOpenAI(
    base_url="http://localhost:1234/v1",
    api_key="lm-studio",
    model="qwen2.5-coder-3b-instruct-mlx",
    temperature=0,
)

# 3. Ask a natural-language question
prompt = """
You are an expert Text-to-SQL assistant.

Generate exactly one valid, read-only SQLite SELECT query.
Return only SQL. Do not include Markdown fences or explanations.

Database schema:

Table: products
- product_id INTEGER PRIMARY KEY
- product_name TEXT

Table: sales
- sale_id INTEGER PRIMARY KEY
- product_id INTEGER
- quantity INTEGER
- unit_price REAL

Relationship:
products.product_id = sales.product_id

Revenue = quantity * unit_price.

Question:
Show the top 3 products ranked by total revenue.

Requirements:
- Select p.product_name and total revenue.
- Use FROM products AS p.
- JOIN sales AS s ON p.product_id = s.product_id.
- Calculate SUM(s.quantity * s.unit_price).
- GROUP BY p.product_id, p.product_name.
- Sort by total_revenue DESC, then p.product_name ASC.
- Use LIMIT 3.
- Never write a column reference starting with a dot.
- Use only the tables and columns listed above.
- Return a complete, syntactically valid SQL query.
"""

# 4. Generate SQL
def generate_sql():
    response = model.invoke(prompt)

    if not isinstance(response.content, str):
        raise ValueError("The model returned an unexpected response.")

    sql = response.content.strip()

    # Remove Markdown code fences
    sql = re.sub(
        r"^```(?:sql)?\s*",
        "",
        sql,
        flags=re.IGNORECASE,
    )
    sql = re.sub(r"\s*```$", "", sql).strip()

    # Repair the specific malformed reference seen in model output
    sql = re.sub(
        r"(?<![\w.])\.product_name\b",
        "p.product_name",
        sql,
        flags=re.IGNORECASE,
    )

    return sql


# 5. Validate and execute SQL safely
def execute_query(sql):
    # Allow SELECT only
    if not re.match(r"^SELECT\b", sql, re.IGNORECASE):
        raise ValueError("Only SELECT queries are allowed.")

    # Permit one optional trailing semicolon, but no multiple statements
    if ";" in sql.rstrip().rstrip(";"):
        raise ValueError("Multiple SQL statements are not allowed.")

    # Open the database in read-only mode
    db_uri = f"file:{DB_PATH.as_posix()}?mode=ro"

    with sqlite3.connect(db_uri, uri=True) as conn:

        def authorize(action, arg1, arg2, db_name, trigger):
            if action == sqlite3.SQLITE_SELECT:
                return sqlite3.SQLITE_OK

            if action == sqlite3.SQLITE_READ:
                if arg1 in {"products", "sales"}:
                    return sqlite3.SQLITE_OK
                return sqlite3.SQLITE_DENY

            if action == sqlite3.SQLITE_FUNCTION:
                return sqlite3.SQLITE_OK

            if (
                hasattr(sqlite3, "SQLITE_RECURSIVE")
                and action == sqlite3.SQLITE_RECURSIVE
            ):
                return sqlite3.SQLITE_OK

            return sqlite3.SQLITE_DENY

        conn.set_authorizer(authorize)

        cursor = conn.execute(sql)
        columns = [column[0] for column in cursor.description or []]
        rows = cursor.fetchmany(4)

        # The requested result is limited to 3 products
        if len(rows) > 3:
            raise ValueError("Query returned more than 3 rows.")

        return columns, rows


# 6. Run the complete Text-to-SQL workflow
def main():
    try:
        print("Generating SQL using Qwen via LM Studio...")

        sql = generate_sql()

        print("\nGenerated SQL:\n")
        print(sql)

        columns, rows = execute_query(sql)

        print("\nQuery Results:")

        if not rows:
            print("No results found.")
            return

        print(" | ".join(columns))
        print("-" * 40)

        for row in rows:
            print(" | ".join(str(value) for value in row))

    except (sqlite3.Error, ValueError) as error:
        print("\nQuery rejected or failed:", error)

    except Exception as error:
        print("\nLLM or connection error:", error)


if __name__ == "__main__":
    main()
