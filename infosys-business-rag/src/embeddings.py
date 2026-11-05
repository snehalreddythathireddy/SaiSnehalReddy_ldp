
import ollama

from src.chunking import create_chunks


MODEL_NAME = "nomic-embed-text"


def generate_embeddings():

    chunks = create_chunks()

    embedded_chunks = []

    print("\nGenerating embeddings...")

    for index, chunk in enumerate(chunks):

        response = ollama.embed(
            model=MODEL_NAME,
            input=chunk["text"]
        )

        embedding = response["embeddings"][0]

        embedded_chunk = {
            "text": chunk["text"],
            "metadata": chunk["metadata"],
            "embedding": embedding
        }

        embedded_chunks.append(embedded_chunk)

        if (index + 1) % 50 == 0:
            print(f"Processed {index + 1}/{len(chunks)} chunks")

    print("\nEmbedding generation completed!")
    print("Total embedded chunks:", len(embedded_chunks))
    print("Embedding dimensions:", len(embedded_chunks[0]["embedding"]))

    return embedded_chunks


if __name__ == "__main__":
    generate_embeddings()
