
import ollama
from pymilvus import MilvusClient
from src.chunking import create_chunks

DB_PATH = "./infosys_milvus.db"
COLLECTION_NAME = "infosys_documents"
MODEL_NAME = "nomic-embed-text"
BATCH_SIZE = 50


def insert_documents():
    # Connect to Milvus
    client = MilvusClient(DB_PATH)

    # Load text chunks
    chunks = create_chunks()
    print(f"\nTotal chunks to insert: {len(chunks)}")

    records = []

    print("\nGenerating embeddings and preparing records...")

    for index, chunk in enumerate(chunks):
        response = ollama.embed(
            model=MODEL_NAME,
            input=chunk["text"]
        )

        embedding = response["embeddings"][0]
        metadata = chunk["metadata"]

        record = {
            "id": index,
            "text": chunk["text"],
            "embedding": embedding,
            "source": metadata["source"],
            "document_type": metadata["document_type"],
            "page_number": metadata["page_number"],
            "chunk_index": metadata["chunk_index"],
            "file_path": metadata["file_path"]
        }

        records.append(record)

        if (index + 1) % 50 == 0:
            print(f"Prepared {index + 1}/{len(chunks)} chunks")

    print("\nInserting records into Milvus...")

    for start in range(0, len(records), BATCH_SIZE):
        batch = records[start:start + BATCH_SIZE]

        result = client.insert(
            collection_name=COLLECTION_NAME,
            data=batch
        )

        print(
            f"Inserted {min(start + BATCH_SIZE, len(records))}"
            f"/{len(records)} records"
        )

    # Verify insertion
    stats = client.get_collection_stats(COLLECTION_NAME)

    print("\nInsertion completed!")
    print("Milvus collection statistics:", stats)

    client.close()


if __name__ == "__main__":
    insert_documents()
