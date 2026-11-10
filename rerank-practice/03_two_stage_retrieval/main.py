documents = [
    "RLHF uses human feedback to improve language model behavior.",
    "Vector search compares query and document embeddings.",
    "Rerankers score a query and document together.",
    "Python is used for data analysis and automation.",
    "Human preferences can guide model alignment.",
    "A retriever quickly finds candidate documents from a large collection.",
    "A cross-encoder can improve the ordering of retrieved candidates.",
    "Cosine similarity measures the angle between two vectors."
]


# Calculate keyword relevance score
def keyword_score(query, document):

    query_terms = set(query.lower().split())

    doc_terms = set(
        document.lower().replace(".", "").split()
    )

    return len(query_terms & doc_terms)


# STAGE 1: Initial Retrieval
def retrieve(query, docs, top_k):

    scored = []

    for doc in docs:

        score = keyword_score(query, doc)

        scored.append({
            "text": doc,
            "retrieval_score": score
        })

    scored.sort(
        key=lambda item: item["retrieval_score"],
        reverse=True
    )

    return scored[:top_k]


# STAGE 2: Reranking
def rerank(query, candidates, top_n):

    reranked = []

    for candidate in candidates:

        score = keyword_score(
            query,
            candidate["text"]
        )

        reranked.append({
            "text": candidate["text"],
            "retrieval_score": candidate["retrieval_score"],
            "rerank_score": score
        })

    reranked.sort(
        key=lambda item: item["rerank_score"],
        reverse=True
    )

    return reranked[:top_n]


# Main execution
if __name__ == "__main__":

    query = "how does human feedback improve language models?"

    # Stage 1
    retrieved_docs = retrieve(
        query,
        documents,
        top_k=6
    )

    print("\nSTAGE 1: RETRIEVED DOCUMENTS")
    print("-" * 50)

    for doc in retrieved_docs:
        print(doc)

    # Stage 2
    reranked_docs = rerank(
        query,
        retrieved_docs,
        top_n=3
    )

    print("\nSTAGE 2: RERANKED DOCUMENTS")
    print("-" * 50)

    for doc in reranked_docs:
        print(doc)

    # Final context
    print("\nFINAL CONTEXT")
    print("-" * 50)

    for doc in reranked_docs:
        print(doc["text"])