
import ollama
from pymilvus import MilvusClient

# Configuration
DB_PATH = "./infosys_milvus.db"
COLLECTION_NAME = "infosys_documents"
MODEL_NAME = "nomic-embed-text"


def retrieve_documents(query, top_k=5):

    # Step 1: Connect to Milvus
    client = MilvusClient(DB_PATH)

    try:
        # Step 2: Load the collection before searching
        client.load_collection(
            collection_name=COLLECTION_NAME
        )

        print("Milvus collection loaded successfully!")

        # Step 3: Convert the analyst's question into an embedding
        response = ollama.embed(
            model=MODEL_NAME,
            input=query
        )

        query_embedding = response["embeddings"][0]

        # Step 4: Search for similar document chunks
        results = client.search(
            collection_name=COLLECTION_NAME,
            data=[query_embedding],
            anns_field="embedding",
            limit=top_k,
            output_fields=[
                "text",
                "source",
                "document_type",
                "page_number",
                "chunk_index"
            ]
        )

        # Step 5: Display retrieved results
        print("\nAnalyst question:", query)
        print(f"\nTop {top_k} retrieved results:\n")

        if not results or not results[0]:
            print("No relevant documents found.")
            return

        for rank, result in enumerate(results[0], start=1):

            entity = result["entity"]

            print(f"\n{'=' * 60}")
            print(f"RESULT {rank}")
            print(f"{'=' * 60}")

            print("Similarity score:", result["distance"])
            print("Source:", entity["source"])
            print("Document type:", entity["document_type"])
            print("Page number:", entity["page_number"])
            print("Chunk index:", entity["chunk_index"])

            print("\nRetrieved text:")
            print(entity["text"][:700])

    finally:
        # Step 6: Close the Milvus connection
        client.close()


if __name__ == "__main__":

    question = "What are Infosys's major business domains?"

    retrieve_documents(
        query=question,
        top_k=5
    )
