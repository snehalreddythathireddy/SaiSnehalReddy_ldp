
from src.generation import retrieve_documents


# Questions covering different document types
test_questions = [
    {
        "question": "What are Infosys's major business domains?",
        "expected_document_type": "financial_report"
    },
    {
        "question": "What is Infosys announcing about its Pocharam Development Center in Hyderabad?",
        "expected_document_type": "press_release"
    },
    {
    "question": "What is discussed in the Infosys blog titled AI for the Rest of the Enterprise?",
    "expected_document_type": "blog"
    }
]


def test_retrieval():

    print("\n" + "=" * 70)
    print("INFOSYS RAG - MULTI-DOCUMENT RETRIEVAL TEST")
    print("=" * 70)

    for test in test_questions:

        question = test["question"]
        expected_type = test["expected_document_type"]

        print("\n" + "=" * 70)
        print("QUESTION:", question)
        print("Expected document type:", expected_type)
        print("=" * 70)

        # Retrieve top 8 relevant chunks
        documents = retrieve_documents(
            question,
            top_k=8
        )

        print("\nRetrieved chunks:", len(documents))

        if not documents:
            print("No documents retrieved!")
            continue

        # Display each retrieved result
        for rank, document in enumerate(documents, start=1):

            print("\n" + "-" * 60)
            print("RESULT:", rank)
            print("Source:", document["source"])
            print("Document type:", document["document_type"])
            print("Page:", document["page_number"])
            print("Similarity score:", document["score"])

            print("\nContent preview:")
            print(document["text"][:500])

        # Check whether the expected document type was retrieved
        retrieved_types = {
            document["document_type"]
            for document in documents
        }

        if expected_type in retrieved_types:
            print("\nRESULT: Expected document type FOUND")
        else:
            print("\nRESULT: Expected document type NOT FOUND")

    print("\n" + "=" * 70)
    print("RETRIEVAL TEST COMPLETED")
    print("=" * 70)


if __name__ == "__main__":
    test_retrieval()
