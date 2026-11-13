
import ollama
from pymilvus import MilvusClient


# --------------------------------------------------
# 1. Configuration
# --------------------------------------------------

DB_PATH = "./infosys_milvus.db"
COLLECTION_NAME = "infosys_documents"

EMBEDDING_MODEL = "nomic-embed-text"
GENERATION_MODEL = "mistral:latest"

TOP_K = 8


# --------------------------------------------------
# 2. Retrieve Relevant Documents
# --------------------------------------------------

def retrieve_documents(query, top_k=TOP_K, document_type=None):

    client = MilvusClient(DB_PATH)

    try:
        client.load_collection(
            collection_name=COLLECTION_NAME
        )

        # Generate embedding for the user's query
        response = ollama.embed(
            model=EMBEDDING_MODEL,
            input=query
        )

        query_embedding = response["embeddings"][0]

        # Prepare Milvus search arguments
        search_arguments = {
            "collection_name": COLLECTION_NAME,
            "data": [query_embedding],
            "anns_field": "embedding",
            "limit": top_k,
            "output_fields": [
                "text",
                "source",
                "document_type",
                "page_number",
                "chunk_index"
            ]
        }

        # Apply document-type filtering if requested
        if document_type:
            search_arguments["filter"] = (
                f'document_type == "{document_type}"'
            )

        # Search in Milvus
        results = client.search(**search_arguments)

        documents = []

        if not results or not results[0]:
            return documents

        # Extract retrieved documents
        for result in results[0]:

            entity = result["entity"]

            documents.append({
                "text": entity["text"],
                "source": entity["source"],
                "document_type": entity["document_type"],
                "page_number": entity["page_number"],
                "chunk_index": entity["chunk_index"],
                "score": result["distance"]
            })

        return documents

    finally:
        client.close()


# --------------------------------------------------
# 3. Generate Answer Using Retrieved Context
# --------------------------------------------------

def generate_answer(query, top_k=TOP_K, document_type=None):

    print("\n" + "=" * 60)
    print("INFOSYS BUSINESS RESEARCH ASSISTANT")
    print("=" * 60)

    print("\nQuestion:")
    print(query)

    # Retrieve relevant documents
    documents = retrieve_documents(
        query,
        top_k=top_k,
        document_type=document_type
    )

    # Handle empty retrieval results
    if not documents:

        answer = (
            "I could not find relevant information "
            "in the available Infosys documents."
        )

        print("\nGenerated Answer:\n")
        print(answer)

        return answer

    # Prepare context from retrieved documents
    context_parts = []

    for index, document in enumerate(documents, start=1):

        context_parts.append(f"""
Source {index}:
Document: {document['source']}
Document Type: {document['document_type']}
Page: {document['page_number']}

Content:
{document['text']}
""")

    context = "\n\n".join(context_parts)

    # Prepare prompt for Mistral
    prompt = f"""
You are an expert business research assistant.

Answer the analyst's question using ONLY the information
provided in the context below.

Instructions:
1. Answer clearly and accurately.
2. Do not invent facts or use outside knowledge.
3. Include all relevant information found in the context.
4. Cite supporting information using source number,
   document filename and page number.
5. Do not cite a source unless it supports the claim.
6. If the context does not contain sufficient information,
   clearly mention that limitation.
7. Distinguish business segments from services or
   industry examples when necessary.

Context:
{context}

Analyst Question:
{query}

Provide a structured answer with source citations.
"""

    # Generate answer using Mistral
    response = ollama.chat(
        model=GENERATION_MODEL,
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        options={
            "temperature": 0
        }
    )

    answer = response["message"]["content"]

    # Display generated answer
    print("\nGenerated Answer:\n")
    print(answer)

    # Display retrieved sources
    print("\nRetrieved Sources:\n")

    for index, document in enumerate(documents, start=1):

        print(
            f"Source {index}: "
            f"{document['source']} "
            f"(Page {document['page_number']}, "
            f"Chunk {document['chunk_index']})"
        )

    return answer


# --------------------------------------------------
# 4. Main Execution
# --------------------------------------------------

if __name__ == "__main__":

    question = (
        "What is discussed in the Infosys blog "
        "AI for the Rest of the Enterprise?"
    )

    generate_answer(
        query=question,
        top_k=TOP_K,
        document_type="blog"
    )
