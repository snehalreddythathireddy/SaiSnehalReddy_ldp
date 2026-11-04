
from langchain_openai import ChatOpenAI

model = ChatOpenAI(
    base_url="http://localhost:1234/v1",
    api_key="lm-studio",
    model="qwen2.5-coder-3b-instruct-mlx",
    temperature=0
)

prompt = """
You are a Text-to-SQL assistant.

Database schema:

Table: products
- product_id INTEGER PRIMARY KEY
- product_name TEXT

Table: sales
- sale_id INTEGER PRIMARY KEY
- product_id INTEGER REFERENCES products(product_id)
- quantity INTEGER
- unit_price REAL

Relationship:
products.product_id = sales.product_id

Revenue = quantity * unit_price.

Question:
Which product generated the highest total revenue?

Return only a valid SQLite SQL query.
"""

response = model.invoke(prompt)

print("\nGenerated SQL:\n")
print(response.content)
