import ollama

# Input text
text = "I love learning Artificial Intelligence"

# Generate embedding
response = ollama.embed(
    model="nomic-embed-text",
    input=text
)

# Extract embedding vector
embedding = response["embeddings"][0]

print("Generated Embedding:")
print(embedding)

print("\nVector dimensions:", len(embedding))