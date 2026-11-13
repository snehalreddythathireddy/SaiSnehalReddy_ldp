
import requests
from bs4 import BeautifulSoup
from pypdf import PdfReader
from io import BytesIO


def parse_document(document):
    url = document.get("url", "")

    if not url:
        return document.get("text", "")

    try:
        response = requests.get(
            url,
            timeout=20,
            headers={"User-Agent": "Mozilla/5.0"}
        )
        response.raise_for_status()

        if url.lower().split("?")[0].endswith(".pdf"):
            reader = PdfReader(BytesIO(response.content))
            return "\n".join(
                page.extract_text() or ""
                for page in reader.pages
            )

        soup = BeautifulSoup(response.text, "html.parser")

        for tag in soup(["script", "style", "nav", "footer"]):
            tag.decompose()

        text = soup.get_text(separator=" ", strip=True)

        return text if len(text) > 100 else document.get("text", "")

    except Exception as error:
        print(f"Parsing failed: {error}")
        return document.get("text", "")
