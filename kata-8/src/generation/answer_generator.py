
from src.llm import generate_response
from src.caching.cache_manager import (
    get_cached_response,
    store_response
)


def generate_answer(query, documents):
    context = "\n\n".join(
        f"Company: {doc['company']}\n"
        f"Source: {doc.get('source', 'unknown')}\n"
        f"URL: {doc.get('url', 'Not available')}\n"
        f"Content: {doc['text']}"
        for doc in documents
    )

    cached = get_cached_response(query, context)

    if cached is not None:
        print("Response Cache HIT")
        return cached

    print("Response Cache MISS")

    prompt = f"""
    You are a professional business research analyst.

    Answer the question using ONLY the provided context.

    Question:
    {query}

    Retrieved information:
    {context}

    Instructions:
    - Give a clear and structured answer.
    - Compare companies when required.
    - Do not invent financial figures.
    - Mention when information is unavailable.
    - Include source URLs wherever available.
    """

    answer = generate_response(prompt)

    store_response(query, context, answer)

    return answer
