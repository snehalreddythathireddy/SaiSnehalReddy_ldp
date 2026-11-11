
import json
import os
from tavily import TavilyClient
from src.config import TAVILY_API_KEY, CHAT_HISTORY_FILE

tavily = TavilyClient(api_key=TAVILY_API_KEY)


def web_search(company, query):
    results = tavily.search(
        query=f"{company} {query}",
        search_depth="advanced",
        max_results=5
    )

    documents = []

    for item in results.get("results", []):
        documents.append({
            "company": company,
            "text": item.get("content", ""),
            "url": item.get("url", ""),
            "title": item.get("title", ""),
            "source": "web",
            "document_type": "Web Article"
        })

    return documents


def search_chat_history(company, query):
    if not os.path.exists(CHAT_HISTORY_FILE):
        return []

    with open(CHAT_HISTORY_FILE, "r") as file:
        history = json.load(file)

    query_words = set(query.lower().split())

    results = []

    for chat in history:
        content = (
            chat.get("question", "") + " " +
            chat.get("answer", "")
        )

        if (
            chat.get("company", "").lower() == company.lower()
            and query_words.intersection(content.lower().split())
        ):
            results.append({
                "company": company,
                "text": content,
                "source": "chat_history",
                "title": "Previous Conversation",
                "url": "",
                "document_type": "Chat History"
            })

    return results
