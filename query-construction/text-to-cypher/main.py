import os
import re

from dotenv import load_dotenv
from neo4j import GraphDatabase

from langchain_ollama import ChatOllama
from langchain_core.prompts import ChatPromptTemplate


# 1. Load environment variables
load_dotenv()

URI = os.getenv("NEO4J_URI")
USERNAME = os.getenv("NEO4J_USERNAME")
PASSWORD = os.getenv("NEO4J_PASSWORD")
DATABASE = os.getenv("NEO4J_DATABASE", "neo4j")


# 2. Connect to Neo4j
driver = GraphDatabase.driver(
    URI,
    auth=(USERNAME, PASSWORD)
)


# 3. Initialize Ollama LLM
llm = ChatOllama(
    model="mistral:latest",
    temperature=0
)


# 4. Define graph schema
schema = """
Node:
Person(name: STRING, age: INTEGER)

Relationship:
(Person)-[:FRIEND_OF]->(Person)
"""


# 5. Create prompt
prompt = ChatPromptTemplate.from_template("""
You are a Neo4j Cypher query generator.

Graph schema:
{schema}

Convert the user's question into a valid Cypher query.

Rules:
- Use only the given nodes, properties and relationships.
- Generate only MATCH and RETURN queries.
- For direct friends, use [:FRIEND_OF], not [:FRIEND_OF*].
- Do not generate CREATE, DELETE, SET, MERGE or DROP.
- Return only the Cypher query.
- Never provide explanations.
- Never add comments.
- Do not use markdown code fences.

User question: {question}

Cypher query:
""")


# 6. Create LangChain chain
chain = prompt | llm


# 7. Function to clean generated Cypher
def clean_query(response):

    query = response.strip()

    # Remove markdown code fences
    query = re.sub(r"```(?:cypher)?", "", query, flags=re.IGNORECASE)

    # Remove closing code fence
    query = query.replace("```", "")

    # Extract query starting from MATCH
    match = re.search(
        r"\bMATCH\b.*",
        query,
        flags=re.IGNORECASE | re.DOTALL
    )

    if not match:
        raise ValueError("No valid MATCH query generated.")

    query = match.group(0).strip()

    # Remove explanations after the query
    query = re.split(r"\n\s*\n", query, maxsplit=1)[0].strip()

    return query


# 8. Validate generated query
def validate_query(query):

    # Allow only MATCH and RETURN statements
    if not re.match(r"^\s*MATCH\b", query, re.IGNORECASE):
        raise ValueError("Only MATCH queries are allowed.")

    forbidden = [
        "CREATE", "DELETE", "DETACH", "SET",
        "MERGE", "DROP", "REMOVE", "CALL",
        "LOAD CSV", "FOREACH"
    ]

    for keyword in forbidden:
        pattern = rf"\b{re.escape(keyword)}\b"

        if re.search(pattern, query, re.IGNORECASE):
            raise ValueError(f"Forbidden Cypher operation: {keyword}")

    if not re.search(r"\bRETURN\b", query, re.IGNORECASE):
        raise ValueError("Query must contain RETURN.")

    return True


# 9. Main execution
try:

    question = input("Ask a question about people: ")

    # Generate Cypher query
    response = chain.invoke({
        "schema": schema,
        "question": question
    })

    # Clean query
    cypher_query = clean_query(response.content)

    print("\nGENERATED CYPHER QUERY:")
    print(cypher_query)

    # Validate query
    validate_query(cypher_query)

    # Execute query
    with driver.session(database=DATABASE) as session:

        results = session.run(cypher_query)

        print("\nQUERY RESULTS:")

        records = list(results)

        if records:
            for record in records:
                print(record.data())
        else:
            print("No records found.")

except Exception as e:

    print("\nERROR:", e)

finally:

    driver.close()