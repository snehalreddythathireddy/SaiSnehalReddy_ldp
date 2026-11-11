
from cachetools import TTLCache, cached
from sentence_transformers import CrossEncoder

from src.llm import generate_embedding
from src.config import COLLECTION_NAME
from src.vectorstore.milvus_store import client

reranker = CrossEncoder(
    "cross-encoder/ms-marco-MiniLM-L-6-v2"
)

retrieval_cache = TTLCache(maxsize=200, ttl=300)
embedding_cache = TTLCache(maxsize=500, ttl=600)


@cached(cache=embedding_cache)
def cached_embedding(query):
    return generate_embedding(query)


@cached(cache=retrieval_cache)
def retrieve_documents(company, query):
    embedding = cached_embedding(query)

    results = client.search(
        collection_name=COLLECTION_NAME,
        partition_names=[company.lower()],
        data=[embedding],
        anns_field="embedding",
        search_params={
            "metric_type": "COSINE",
            "params": {}
        },
        limit=10,
        output_fields=["company", "text", "source", "url"]
    )

    documents = [
        result["entity"]
        for result in results[0]
    ]

    return documents


def rerank_documents(query, documents):
    if not documents:
        return []

    pairs = [
        [query, document["text"]]
        for document in documents
    ]

    scores = reranker.predict(pairs)

    ranked = sorted(
        zip(documents, scores),
        key=lambda item: item[1],
        reverse=True
    )

    return [
        document
        for document, score in ranked[:5]
    ]
