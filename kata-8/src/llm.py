
import requests
from src.config import OLLAMA_URL, LLM_MODEL, EMBED_MODEL


def generate_response(prompt):
    response = requests.post(
        f"{OLLAMA_URL}/api/generate",
        json={
            "model": LLM_MODEL,
            "prompt": prompt,
            "stream": False
        },
        timeout=180
    )
    response.raise_for_status()
    return response.json()["response"]


def generate_embedding(text):
    response = requests.post(
        f"{OLLAMA_URL}/api/embed",
        json={
            "model": EMBED_MODEL,
            "input": text
        },
        timeout=120
    )
    response.raise_for_status()
    return response.json()["embeddings"][0]
