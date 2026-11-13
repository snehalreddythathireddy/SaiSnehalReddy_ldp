
import json
from datetime import date

import trafilatura
from langchain_openai import ChatOpenAI

# Connect to the local LLM
llm = ChatOpenAI(
    base_url="http://localhost:1234/v1",
    api_key="lm-studio",
    model="qwen2.5-coder-3b-instruct-mlx",
    temperature=0
)


# Read existing articles from JSON
def load_articles():
    try:
        with open("articles.json", "r") as file:
            return json.load(file)
    except FileNotFoundError:
        return []


# Save articles into JSON
def save_articles(articles):
    with open("articles.json", "w") as file:
        json.dump(articles, file, indent=4)


# Extract and summarize a news article
def summarize_news():
    url = input("Enter news article URL: ")

    downloaded = trafilatura.fetch_url(url)

    if downloaded is None:
        print("Unable to download the article.")
        return

    article = trafilatura.extract(downloaded)

    if not article:
        print("Unable to extract article content.")
        return

    # Ask the LLM to summarize and classify the article
    prompt = f"""
    Summarize this news article in 3 to 5 sentences.
    Also identify its type, such as financial, technology,
    sports, politics, health, or business.

    Return the result in this JSON format:
    {{
        "summary": "News summary",
        "articleType": "technology"
    }}

    Article:
    {article[:12000]}
    """

    response = llm.invoke(prompt)

    try:
        result = json.loads(response.content)
    except json.JSONDecodeError:
        print("The model did not return valid JSON. Try again.")
        print(response.content)
        return

    # Add the date
    result["date"] = str(date.today())

    # Keep only the required fields
    article_data = {
        "date": result["date"],
        "summary": result["summary"],
        "articleType": result["articleType"].lower()
    }

    # Save the new article
    articles = load_articles()
    articles.append(article_data)
    save_articles(articles)

    print("\nGenerated Summary:")
    print(json.dumps(article_data, indent=4))
    print("\nArticle saved successfully!")


# Display saved articles
def view_news():
    articles = load_articles()

    if len(articles) == 0:
        print("No articles available.")
        return

    for article in articles:
        print("\nDate:", article["date"])
        print("Type:", article["articleType"])
        print("Summary:", article["summary"])


# Ask questions about saved articles
def ask_question():
    articles = load_articles()

    if len(articles) == 0:
        print("Please summarize an article first.")
        return

    question = input("Enter your question: ")

    prompt = f"""
    Answer the question using only these saved news summaries.
    If the answer is not available, say so.

    News data:
    {json.dumps(articles)}

    Question: {question}
    """

    response = llm.invoke(prompt)
    print("\nAnswer:", response.content)


# Main menu
while True:
    print("\n===== NEWS SUMMARIZER =====")
    print("1. Summarize news")
    print("2. View saved news")
    print("3. Ask a question")
    print("4. Exit")

    choice = input("Enter your choice: ")

    if choice == "1":
        summarize_news()
    elif choice == "2":
        view_news()
    elif choice == "3":
        ask_question()
    elif choice == "4":
        print("Exiting program.")
        break
    else:
        print("Invalid choice.")
