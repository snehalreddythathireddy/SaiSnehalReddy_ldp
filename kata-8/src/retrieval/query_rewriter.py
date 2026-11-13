
import json
from src.llm import generate_response


def construct_queries(query, chat_history=""):
    prompt = f"""
    You are an advanced query construction system.

    Chat history:
    {chat_history}

    User question:
    {query}

    Tasks:
    1. Rewrite the question using conversation context.
    2. Generate up to 3 useful subqueries.
    3. Preserve company names and important details.

    Return ONLY valid JSON:
    {{
        "rewritten_query": "...",
        "sub_queries": ["...", "..."]
    }}
    """

    response = generate_response(prompt)

    try:
        start = response.find("{")
        end = response.rfind("}") + 1

        result = json.loads(response[start:end])

        return (
            result["rewritten_query"],
            result["sub_queries"]
        )

    except Exception:
        return query, [query]
