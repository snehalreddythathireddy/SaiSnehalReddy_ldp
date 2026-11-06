candidates = [
    "RLHF trains language models using human preference feedback.",
    "Reinforcement learning is used in robotics and games.",
    "Human feedback can help align model responses with preferences.",
    "Python is a popular programming language.",
]


def rerank_documents(query, docs):

    query_terms = set(query.lower().split())

    results = []

    for document in docs:

        doc_terms = set(document.lower().replace(".", "").split())

        score = len(query_terms & doc_terms)

        results.append({
            "text": document,
            "score": score
        })

    results.sort(
        key=lambda item: item["score"],
        reverse=True
    )

    return results


if __name__ == "__main__":

    query = "human feedback language models"

    reranked_docs = rerank_documents(query, candidates)

    print("RERANKED DOCUMENTS")
    print("-" * 50)

    for rank, doc in enumerate(reranked_docs, start=1):

        print(f"Rank: {rank}")
        print(f"Score: {doc['score']}")
        print(f"Document: {doc['text']}")
        print()