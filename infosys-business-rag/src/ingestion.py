
from pathlib import Path
from pypdf import PdfReader


DOCUMENTS_DIR = Path("data/documents")


def get_document_type(file_path):

    folder_name = file_path.parent.name

    document_types = {
        "financial_reports": "financial_report",
        "press_releases": "press_release",
        "blogs": "blog"
    }

    return document_types.get(folder_name, "unknown")


def load_documents():

    documents = []

    pdf_files = list(DOCUMENTS_DIR.rglob("*.pdf"))

    print(f"Found {len(pdf_files)} PDF documents.")

    for pdf_path in pdf_files:

        print(f"\nProcessing: {pdf_path.name}")

        reader = PdfReader(str(pdf_path))

        for page_number, page in enumerate(reader.pages, start=1):

            text = page.extract_text() or ""
            text = text.strip()

            if not text:
                continue

            document = {
                "text": text,
                "metadata": {
                    "source": pdf_path.name,
                    "document_type": get_document_type(pdf_path),
                    "page_number": page_number,
                    "file_path": str(pdf_path)
                }
            }

            documents.append(document)

    print("\nDocument ingestion completed!")
    print("Total extracted pages:", len(documents))

    return documents


if __name__ == "__main__":

    all_documents = load_documents()

    print("\nFirst extracted document:")
    print(all_documents[0]["metadata"])
    print("\nText preview:")
    print(all_documents[0]["text"][:500])
