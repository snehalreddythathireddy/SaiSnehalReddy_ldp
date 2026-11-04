from pinecone import Pinecone
from dotenv import load_dotenv
import os

from src.chunking import chunks
from src.dense_embeddings import embeddings
from src.sparse_embeddings import sparse_embeddings


# Step 1: Connect to Pinecone
load_dotenv()

pc = Pinecone(
    api_key=os.getenv("PINECONE_API_KEY")
)

index = pc.Index("hybrid-rag-index")


# Step 2: Prepare records
records = []

for i, chunk in enumerate(chunks):

    record = {
        "id": f"chunk-{i}",

        # Dense embedding
        "values": embeddings[i],

        # Sparse embedding
        "sparse_values": sparse_embeddings[i],

        # Original text and metadata
        "metadata": {
            "text": chunk.page_content,
            "page": chunk.metadata["page"]
        }
    }

    records.append(record)


# Step 3: Upload records
index.upsert(vectors=records)


# Step 4: Verify upload
print("HYBRID VECTORS UPLOADED")
print("-" * 50)

stats = index.describe_index_stats()

print("Total vectors in Pinecone:", stats.total_vector_count)