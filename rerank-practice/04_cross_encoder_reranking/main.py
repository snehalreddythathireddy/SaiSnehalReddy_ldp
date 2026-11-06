from sentence_transformers import CrossEncoder


# Documents
documents = [
    "RLHF uses human preferences to fine-tune language model responses.",

    "Vector databases store embeddings for similarity search.",

    "Human feedback can help make model outputs more helpful and aligned.",

    "Python supports many machine learning libraries.",

    "RLHF improves helpfulness and harmlessness of language models."
]


# User query
query = "Why is reinforcement learning from human feedback useful?"


# Load pretrained cross-encoder model
model = CrossEncoder(
    "cross-encoder/ms-marco-MiniLM-L-6-v2"
)


# Create query-document pairs
pairs = [
    [query, document]
    for document in documents
]


# Calculate relevance scores
scores = model.predict(pairs)


# Combine documents and scores
results = list(zip(documents, scores))


# Sort based on relevance
results.sort(
    key=lambda item: float(item[1]),
    reverse=True
)


# Display results
print("\nCROSS-ENCODER RERANKING")
print("-" * 50)

for rank, (document, score) in enumerate(results, start=1):

    print(f"Rank: {rank}")
    print(f"Score: {float(score):.4f}")
    print(f"Document: {document}")
    print()