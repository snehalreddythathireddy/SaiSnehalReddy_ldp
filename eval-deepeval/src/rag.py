
import re

from src.ollama_model import OllamaModel


# 1. College FAQ knowledge base
documents = [
    "Students must maintain at least 75% attendance to be eligible for semester examinations.",

    "Students can participate in campus placements if they satisfy the eligibility criteria specified by the recruiting company.",

    "Internal examinations are conducted before the semester-end examinations.",

    "Students should contact the examination cell for examination-related queries.",

    "Students must complete course registration before the semester registration deadline.",

    "The college does not guarantee free laptops to all students."
]


# 2. Stopwords
stopwords = {
    "what", "is", "are", "the", "a", "an",
    "for", "to", "of", "in", "can", "do",
    "how", "when", "where", "who", "should",
    "must", "i", "my", "students", "their",
    "they", "if", "and", "or", "does",
    "required", "please", "tell", "me"
}


# 3. Keyword-based document retrieval
def retrieve_documents(question, top_k=1):

    question_words = {
        word
        for word in re.findall(r"\w+", question.lower())
        if word not in stopwords
    }

    scored_documents = []

    for document in documents:

        document_words = set(
            re.findall(r"\w+", document.lower())
        )

        # Calculate keyword overlap
        score = len(question_words & document_words)

        if score > 0:
            scored_documents.append((score, document))

    # Sort documents by relevance score
    scored_documents.sort(
        key=lambda item: item[0],
        reverse=True
    )

    # Return only the top relevant documents
    return [
        document
        for score, document in scored_documents[:top_k]
    ]


# 4. Initialize Ollama model once
model = OllamaModel()


# 5. RAG pipeline
def rag_pipeline(question):

    # Retrieve relevant documents
    retrieved_context = retrieve_documents(
        question,
        top_k=1
    )

    # Handle questions with no matching documents
    if not retrieved_context:
        return (
            "I could not find relevant information in the college FAQ.",
            []
        )

    context = "\n".join(retrieved_context)

    # Construct prompt
    prompt = f"""
    You are a college FAQ assistant.

    Answer the question using ONLY the information
    provided in the context.

    If the answer is not available in the context,
    clearly say that you do not have that information.

    Context:
    {context}

    Question:
    {question}

    Answer:
    """

    # Generate answer using Ollama
    answer = model.generate(prompt)

    return answer, retrieved_context
