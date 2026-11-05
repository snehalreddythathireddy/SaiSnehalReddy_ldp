
import os
from dotenv import load_dotenv
from openai import OpenAI

from src.rag import default_rag_client


# Load environment variables
load_dotenv()

# Connect to Ollama
client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY"),
    base_url=os.getenv("OPENAI_BASE_URL")
)

# Initialize RAG client
rag_client = default_rag_client(client)

# Ask a question
response = rag_client.query(
    "What is the minimum attendance required for semester exams?"
)

print("\nGenerated Answer:")
print(response["answer"])

print("\nLog File:")
print(response["logs"])
