
from pathlib import Path
from pypdf import PdfReader


DOCUMENTS_DIR = Path("data/documents")


def inspect_pdf(pdf_path):

    print("\n" + "=" * 60)
    print(f"FILE: {pdf_path.name}")
    print("=" * 60)

    try:
        reader = PdfReader(str(pdf_path))

        print("Total pages:", len(reader.pages))

        extracted_text = ""

        for page_number, page in enumerate(reader.pages, start=1):
            text = page.extract_text() or ""
            extracted_text += text + "\n"

            print(
                f"Page {page_number}: "
                f"{len(text)} characters extracted"
            )

        print("Total extracted characters:", len(extracted_text))

        print("\nTEXT PREVIEW:")
        print(extracted_text[:800])

        if not extracted_text.strip():
            print("\nWARNING: No readable text found.")

    except Exception as error:
        print("ERROR:", error)


def main():

    pdf_files = list(DOCUMENTS_DIR.rglob("*.pdf"))

    if not pdf_files:
        print("No PDF files found!")
        return

    print(f"Found {len(pdf_files)} PDF documents.")

    for pdf_path in pdf_files:
        inspect_pdf(pdf_path)


if __name__ == "__main__":
    main()
