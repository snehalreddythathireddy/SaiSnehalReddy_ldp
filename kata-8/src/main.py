
from src.vectorstore.milvus_store import initialize_database
from src.agents.research_agent import research_agent
from src.ingestion.ingest import ingest_documents
from src.retrieval.query_rewriter import construct_queries
from src.retrieval.retriever import (
    retrieve_documents,
    rerank_documents
)
from src.memory.chat_history import (
    get_recent_history,
    save_chat
)
from src.generation.answer_generator import generate_answer
from src.config import COMPANIES
from src.caching.cache_manager import cache_stats


def run_pipeline(query):
    print("\nStarting Advanced RAG Pipeline...")

    # 1. Agent and tools
    documents = research_agent(query)

    if not documents:
        print("No documents discovered.")
        return

    # 2. Document ingestion
    ingest_documents(documents)

    # 3. Identify companies
    companies = list({
        doc["company"] for doc in documents
    })

    all_retrieved = []

    for company in companies:

        # 4. Chat history
        history = get_recent_history(company)

        # 5. Query construction
        rewritten_query, sub_queries = construct_queries(
            query, history
        )

        print(f"\nCompany: {company}")
        print("Rewritten query:", rewritten_query)
        print("Subqueries:", sub_queries)

        queries = [rewritten_query] + sub_queries

        # 6. Similarity search
        company_documents = []

        for search_query in queries:
            results = retrieve_documents(
                company, search_query
            )
            company_documents.extend(results)

        # Remove duplicate chunks
        unique_documents = {
            doc["text"]: doc
            for doc in company_documents
        }

        # 7. Reranking
        ranked = rerank_documents(
            rewritten_query,
            list(unique_documents.values())
        )

        all_retrieved.extend(ranked)

    if not all_retrieved:
        print("No relevant documents found.")
        return

    # 8. Generate answer with response caching
    answer = generate_answer(query, all_retrieved)

    print("\n========== FINAL ANSWER ==========")
    print(answer)

    # 9. Save chat history
    for company in companies:
        save_chat(company, query, answer)

    print("\n========== CACHE STATISTICS ==========")
    print(cache_stats())


if __name__ == "__main__":
    initialize_database()

    print("Multi-Company Advanced RAG System")

    while True:
        query = input("\nAsk a business question (exit to quit): ")

        if query.lower() == "exit":
            break

        run_pipeline(query)
