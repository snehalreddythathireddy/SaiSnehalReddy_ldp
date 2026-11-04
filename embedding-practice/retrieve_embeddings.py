import ollama
import chromadb

# Step 1: Connect to existing database
client = chromadb.PersistentClient(
    path="./chroma_db"
)

# Step 2: Access existing collection
collection = client.get_collection(
    name="my_documents"
)

# Step 3: User query
query = "What is machine learning?"

# Step 4: Generate query embedding
response = ollama.embed(
    model="nomic-embed-text",
    input=query
)

query_embedding = response["embeddings"][0]

# Step 5: Retrieve similar documents
results = collection.query(
    query_embeddings=[query_embedding],
    n_results=2
)

# Step 6: Display results
print("User Query:", query)
print("\nRetrieved Documents:")

for document in results["documents"][0]:
    print("-", document)