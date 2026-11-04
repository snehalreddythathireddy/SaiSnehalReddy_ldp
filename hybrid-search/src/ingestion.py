from langchain_community.document_loaders import PyPDFLoader
from pathlib import Path

# Step 1: Define PDF directory
PDF_DIRECTORY = Path("data/documents")

# Step 2: Find all PDF files
pdf_files = list(PDF_DIRECTORY.glob("*.pdf"))

if not pdf_files:
    raise FileNotFoundError("No PDF files found in data/documents!")

# Step 3: Load PDF documents
all_documents = []

for pdf_file in pdf_files:

    print(f"\nLoading: {pdf_file.name}")

    loader = PyPDFLoader(str(pdf_file))

    documents = loader.load()

    all_documents.extend(documents)

# Step 4: Display extracted content
print("\nPDF INGESTION COMPLETED")
print("-" * 50)

print("Total PDF files:", len(pdf_files))
print("Total pages:", len(all_documents))

for document in all_documents:

    print("\nPage:", document.metadata["page"] + 1)

    print("Content:")
    print(document.page_content[:500])

    print("-" * 50)