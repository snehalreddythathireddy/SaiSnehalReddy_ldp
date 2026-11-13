
import json

try:
    with open("articles.json", "r") as file:
        articles = json.load(file)

    required_keys = {"date", "summary", "articleType"}

    for article in articles:
        assert set(article.keys()) == required_keys
        assert article["summary"].strip() != ""

    print("Test passed!")
    print("Total articles:", len(articles))

except FileNotFoundError:
    print("articles.json not found. Summarize an article first.")

except (json.JSONDecodeError, AssertionError) as error:
    print("Test failed:", error)
