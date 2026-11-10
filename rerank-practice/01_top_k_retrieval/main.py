documents = [
    "Machine learning is a subset of artificial intelligence.",
    "Deep learning uses neural networks.",
    "RAG combines retrieval and generation.",
    "Reranking improves document retrieval relevance.",
    "Python is widely used for machine learning.",
    "Machine learning helps computers learn patterns from data.",
    "Natural language processing is a field of artificial intelligence."
]


def score_document(query, document):

    query_terms = set(query.lower().split())

    document_terms = set(
        document.lower().replace(".", "").split()
    )

    return len(query_terms & document_terms)


def retrieve_top_k(query, docs, top_k=3):

    scored_docs = []

    for document in docs:

        score = score_document(query, document)

        scored_docs.append((document, score))

    scored_docs.sort(
        key=lambda item: item[1],
        reverse=True
    )

    return scored_docs[:top_k]


if __name__ == "__main__":

    query = "machine learning"

    results = retrieve_top_k(query, documents, top_k=3)

    print("TOP-K RETRIEVAL")
    print("-" * 50)

    for rank, (document, score) in enumerate(results, start=1):

        print(f"{rank}. Score: {score}")
        print(f"   {document}")