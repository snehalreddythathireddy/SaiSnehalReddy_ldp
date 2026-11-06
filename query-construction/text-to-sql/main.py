import sqlite3
import re

from langchain_ollama import ChatOllama
from langchain_core.prompts import ChatPromptTemplate


# 1. Create database
conn = sqlite3.connect("college.db")
cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY,
    name TEXT,
    marks INTEGER,
    department TEXT
)
""")

students = [
    (1, "Sneha", 90, "CSE"),
    (2, "Rahul", 65, "ECE"),
    (3, "Priya", 85, "CSE"),
    (4, "Arjun", 70, "EEE"),
    (5, "Kiran", 95, "ECE")
]

cursor.executemany(
    "INSERT OR IGNORE INTO students VALUES (?, ?, ?, ?)",
    students
)

conn.commit()


# 2. Get database schema
cursor.execute("PRAGMA table_info(students)")
columns = cursor.fetchall()

schema = "Table: students\nColumns:\n"

for column in columns:
    schema += f"{column[1]} ({column[2]})\n"


# 3. Initialize LLM
llm = ChatOllama(
    model="mistral:latest",
    temperature=0
)


# 4. Create prompt
prompt = ChatPromptTemplate.from_template("""
You are an SQL query generator.

Database schema:
{schema}

Convert the user's question into a valid SQLite SELECT query.

Rules:
- Use only existing tables and columns.
- Generate only SELECT queries.
- Do not explain the query.
- Return only SQL.

User question: {question}
""")


# 5. Create query generation chain
chain = prompt | llm


# 6. Get user input
user_question = input("Enter your question: ")


# 7. Generate SQL query
response = chain.invoke({
    "schema": schema,
    "question": user_question
})

sql_query = response.content.strip()

# Remove markdown formatting
sql_query = re.sub(r"```(?:sql)?", "", sql_query).strip()


# 8. Validate query
if not sql_query.upper().startswith("SELECT") or ";" in sql_query.rstrip(";"):
    raise ValueError("Only single SELECT queries are allowed!")

print("\nGENERATED SQL QUERY:")
print(sql_query)


# 9. Execute query
cursor.execute(sql_query)

results = cursor.fetchall()


# 10. Display results
print("\nQUERY RESULTS:")

for result in results:
    print(result)


conn.close()