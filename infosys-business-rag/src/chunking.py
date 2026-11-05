
from langchain_text_splitters import RecursiveCharacterTextSplitter
from src.ingestion import load_documents


def create_chunks():

    # Step 1: Load extracted documents
    documents = load_documents()

    # Step 2: Configure the text splitter
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200,
        length_function=len,
        separators=["\n\n", "\n", " ", ""]
    )

    chunks = []

    # Step 3: Split each document into smaller chunks
    for document in documents:

        split_texts = text_splitter.split_text(
            document["text"]
        )

        # Step 4: Remove very short chunks
        split_texts = [
            chunk for chunk in split_texts
            if len(chunk.strip()) >= 100
        ]

        # Step 5: Store chunks along with metadata
        for chunk_index, chunk_text in enumerate(split_texts):

            chunk = {
                "text": chunk_text,
                "metadata": {
                    **document["metadata"],
                    "chunk_index": chunk_index
                }
            }

            chunks.append(chunk)

    # Step 6: Display results
    print("\nChunking completed!")

    print("Original pages:", len(documents))
    print("Total chunks:", len(chunks))

    if chunks:
        print("\nFirst chunk metadata:")
        print(chunks[0]["metadata"])

        print("\nFirst chunk preview:")
        print(chunks[0]["text"][:500])

    return chunks


if __name__ == "__main__":
    create_chunks()
