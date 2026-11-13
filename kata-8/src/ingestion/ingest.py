
from src.ingestion.document_parser import parse_document
from src.ingestion.chunking import split_text
from src.llm import generate_embedding
from src.vectorstore.milvus_store import insert_documents


def ingest_documents(documents):
    records = []

    for document in documents:
        text = parse_document(document)

        if not text:
            continue

        chunks = split_text(text)

        for index, chunk in enumerate(chunks):
            records.append({
                "company": document["company"],
                "text": chunk,
                "source": document.get("source", "web"),
                "url": document.get("url", ""),
                "title": document.get("title", ""),
                "document_type": document.get(
                    "document_type", "Unknown"
                ),
                "chunk_id": f"{document['company']}_{index}",
                "embedding": generate_embedding(chunk)
            })

    if records:
        insert_documents(records)

    print(f"Successfully ingested {len(records)} chunks")
