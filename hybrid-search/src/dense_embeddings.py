import ollama

from src.ingestion import all_documents
from src.chunking import chunks


# Step 1: Extract text from chunks
texts = [chunk.page_content for chunk in chunks]


# Step 2: Generate dense embeddings
response = ollama.embed(
    model="nomic-embed-text",
    input=texts
)

embeddings = response["embeddings"]


# Step 3: Display embedding information
print("DENSE EMBEDDINGS GENERATED")
print("-" * 50)

print("Total chunks:", len(chunks))
print("Total embeddings:", len(embeddings))

print("Embedding dimensions:", len(embeddings[0]))

print("\nFirst embedding:")
print(embeddings[0][:10])