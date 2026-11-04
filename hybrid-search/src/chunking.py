from langchain_text_splitters import RecursiveCharacterTextSplitter
from src.ingestion import all_documents

# Step 1: Initialize text splitter
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=100,
    length_function=len,
    separators=["\n\n", "\n", " ", ""]
)

# Step 2: Split PDF documents into chunks
chunks = text_splitter.split_documents(all_documents)

# Step 3: Display chunk information
print("DOCUMENT CHUNKING COMPLETED")
print("-" * 50)

print("Total pages:", len(all_documents))
print("Total chunks:", len(chunks))

# Step 4: Display sample chunks
for index, chunk in enumerate(chunks[:3]):

    print(f"\nChunk {index + 1}")
    print("Page:", chunk.metadata["page"] + 1)
    print("Content:")
    print(chunk.page_content)
    print("-" * 50)