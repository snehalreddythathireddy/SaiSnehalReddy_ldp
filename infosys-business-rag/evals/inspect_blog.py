
from src.generation import retrieve_documents

question = "What is discussed in the Infosys blog titled AI for the Rest of the Enterprise?"


def inspect_blog():

    documents = retrieve_documents(
        question,
        top_k=8,
        document_type="blog"
    )

    print("\nBLOG RETRIEVAL RESULTS")
    print("=" * 60)

    for index, document in enumerate(documents, start=1):

        print(f"\nResult: {index}")
        print("Source:", document["source"])
        print("Type:", document["document_type"])
        print("Page:", document["page_number"])
        print("Similarity:", document["score"])
        print("Content:", document["text"])


if __name__ == "__main__":
    inspect_blog()
