
import json
import os
from src.config import CHAT_HISTORY_FILE


def save_chat(company, question, answer):
    os.makedirs("data", exist_ok=True)

    history = []

    if os.path.exists(CHAT_HISTORY_FILE):
        with open(CHAT_HISTORY_FILE) as file:
            history = json.load(file)

    history.append({
        "company": company,
        "question": question,
        "answer": answer
    })

    with open(CHAT_HISTORY_FILE, "w") as file:
        json.dump(history, file, indent=4)


def get_recent_history(company):
    if not os.path.exists(CHAT_HISTORY_FILE):
        return ""

    with open(CHAT_HISTORY_FILE) as file:
        history = json.load(file)

    chats = [
        item for item in history
        if item["company"].lower() == company.lower()
    ]

    return "\n".join(
        f"Question: {item['question']}\nAnswer: {item['answer']}"
        for item in chats[-5:]
    )
