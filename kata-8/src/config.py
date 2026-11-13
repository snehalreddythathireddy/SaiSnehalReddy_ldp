
import os
from dotenv import load_dotenv

load_dotenv()

OLLAMA_URL = os.getenv("OLLAMA_URL", "http://localhost:11434")
LLM_MODEL = os.getenv("LLM_MODEL", "mistral")
EMBED_MODEL = os.getenv("EMBED_MODEL", "nomic-embed-text")
TAVILY_API_KEY = os.getenv("TAVILY_API_KEY")

COLLECTION_NAME = "company_documents"

COMPANIES = [
    "Google",
    "Microsoft",
    "Amazon",
    "Infosys"
]

CHAT_HISTORY_FILE = "data/chat_history.json"
