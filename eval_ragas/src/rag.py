
import os
import json
from pathlib import Path
from datetime import datetime, timezone


class CollegeFAQClient:

    def __init__(self, llm_client, logdir="evals/logs"):

        self.llm_client = llm_client
        self.logdir = Path(logdir)

        self.logdir.mkdir(parents=True, exist_ok=True)

        # College knowledge base
        self.context = """
        College FAQ:

        1. Students need at least 75% attendance
           to be eligible for semester examinations.

        2. Students can apply for placements
           if they satisfy the company's eligibility criteria.

        3. Internal examinations are conducted
           before semester-end examinations.

        4. Students can contact the examination cell
           for examination-related queries.

        5. Students must register for courses
           before the semester registration deadline.
        """

    def query(self, question):

        # Generate answer using Mistral through Ollama
        result = self.llm_client.chat.completions.create(

            model=os.getenv("OPENAI_MODEL", "mistral"),

            messages=[
                {
                    "role": "system",
                    "content": (
                        "You are a college FAQ assistant. "
                        "Answer using only the provided context. "
                        "If the information is unavailable, say so."
                    )
                },
                {
                    "role": "user",
                    "content": f"""
                    Context:
                    {self.context}

                    Question:
                    {question}
                    """
                }
            ],

            temperature=0
        )

        answer = result.choices[0].message.content or ""

        # Prepare log data
        log_data = {
            "question": question,
            "context": self.context,
            "answer": answer
        }

        # Generate unique filename
        filename = datetime.now(timezone.utc).strftime(
            "query_%Y%m%d_%H%M%S_%f.json"
        )

        log_path = self.logdir / filename

        # Save interaction
        log_path.write_text(
            json.dumps(log_data, indent=2),
            encoding="utf-8"
        )

        return {
            "answer": answer,
            "logs": str(log_path)
        }


def default_rag_client(llm_client, logdir="evals/logs"):

    return CollegeFAQClient(llm_client, logdir)
