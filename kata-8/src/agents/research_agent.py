
from src.agents.tools import web_search, search_chat_history
from src.config import COMPANIES


def detect_companies(query):
    return [
        company for company in COMPANIES
        if company.lower() in query.lower()
    ]


def research_agent(query):
    companies = detect_companies(query)

    if not companies:
        companies = COMPANIES

    all_documents = []

    for company in companies:
        print(f"Researching: {company}")

        web_docs = web_search(company, query)
        chat_docs = search_chat_history(company, query)

        all_documents.extend(web_docs)
        all_documents.extend(chat_docs)

    return all_documents
