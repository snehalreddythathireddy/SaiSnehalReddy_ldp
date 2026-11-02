import ollama
import chromadb

# Step 1: Create ChromaDB client
client = chromadb.PersistentClient(
    path="./chroma_db"
)

# Step 2: Create a collection
collection = client.get_or_create_collection(
    name="my_documents"
)

# Step 3: Prepare documents
documents = [
    "Artificial Intelligence is transforming technology.",
    "Machine Learning is a branch of Artificial Intelligence.",
    "Cricket is a popular sport."
]

# Step 4: Generate embeddings
response = ollama.embed(
    model="nomic-embed-text",
    input=documents
)

embeddings = response["embeddings"]

# Step 5: Store documents and embeddings
collection.add(
    ids=["doc1", "doc2", "doc3"],
    documents=documents,
    embeddings=embeddings
)

print("Documents and embeddings stored successfully!")

# Step 6: Check stored records
print("Total records:", collection.count())