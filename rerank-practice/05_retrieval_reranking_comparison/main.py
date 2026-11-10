from sentence_transformers import CrossEncoder


# Document collection
documents = [
    "RLHF aligns language model responses with human preferences.",
    "Reinforcement learning can train an agent through rewards.",
    "Human feedback is used to improve helpfulness and safety.",
    "A vector database stores and searches document embeddings.",
    "Language models generate text from a prompt.",
    "RLHF can make assistant responses more helpful and harmless."
]


# Stage 1: Initial retrieval using keyword matching
def retrieve_documents(query, docs, top_k):

    query_words = set(query.lower().split())

    results = []

    for document in docs:

        doc_words = set(document.lower().replace(".", "").split())

        score = len(query_words & doc_words)

        results.append({
            "text": document,
            "retrieval_score": score
        })

    results.sort(
        key=lambda item: item["retrieval_score"],
        reverse=True
    )

    return results[:top_k]


# Stage 2: Cross-encoder reranking
def rerank_documents(query, retrieved_docs, model):

    pairs = [
        [query, doc["text"]]
        for doc in retrieved_docs
    ]

    scores = model.predict(pairs)

    reranked_results = []

    for doc, score in zip(retrieved_docs, scores):

        reranked_results.append({
            "text": doc["text"],
            "retrieval_score": doc["retrieval_score"],
            "rerank_score": float(score)
        })

    reranked_results.sort(
        key=lambda item: item["rerank_score"],
        reverse=True
    )

    return reranked_results


# Main execution
if __name__ == "__main__":

    query = "Why use human feedback to improve language models?"

    top_k = 5
    top_n = 3

    # Load cross-encoder
    model = CrossEncoder(
        "cross-encoder/ms-marco-MiniLM-L-6-v2"
    )

    # Stage 1
    retrieved_docs = retrieve_documents(
        query,
        documents,
        top_k
    )

    print("\nINITIAL RETRIEVAL RESULTS")
    print("-" * 60)

    for rank, doc in enumerate(retrieved_docs, start=1):

        print(f"Rank: {rank}")
        print(f"Score: {doc['retrieval_score']}")
        print(f"Document: {doc['text']}")
        print()

    # Stage 2
    reranked_docs = rerank_documents(
        query,
        retrieved_docs,
        model
    )

    print("\nCROSS-ENCODER RERANKING RESULTS")
    print("-" * 60)

    for rank, doc in enumerate(reranked_docs, start=1):

        print(f"Rank: {rank}")
        print(f"Score: {doc['rerank_score']:.4f}")
        print(f"Document: {doc['text']}")
        print()

    # Final Top-N
    final_docs = reranked_docs[:top_n]

    print("\nFINAL TOP-N DOCUMENTS")
    print("-" * 60)

    for doc in final_docs:
        print(doc["text"])
        print()