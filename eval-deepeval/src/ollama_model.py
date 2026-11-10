
import os
import asyncio
import json

from openai import OpenAI
from dotenv import load_dotenv
from deepeval.models import DeepEvalBaseLLM

load_dotenv()


class OllamaModel(DeepEvalBaseLLM):

    def __init__(self):
        self.model_name = os.getenv("OPENAI_MODEL", "mistral")

        super().__init__(model=self.model_name)

        # Initialize the Ollama API client
        self.client = self.load_model()

    def load_model(self):
        return OpenAI(
            api_key=os.getenv("OPENAI_API_KEY", "ollama"),
            base_url=os.getenv(
                "OPENAI_BASE_URL",
                "http://localhost:11434/v1"
            )
        )

    def generate(self, prompt: str, schema=None, **kwargs) -> str:

        messages = []

        # Request valid JSON whenever DeepEval provides a schema
        if schema is not None:
            schema_definition = schema.model_json_schema()

            messages.append({
                "role": "system",
                "content": (
                    "Return ONLY one valid JSON object. "
                    "Do not include explanations, markdown, or text "
                    "outside the JSON object. Follow this schema:\n"
                    + json.dumps(schema_definition)
                )
            })

        messages.append({
            "role": "user",
            "content": prompt
        })

        request_options = {
            "model": self.model_name,
            "messages": messages,
            "temperature": 0
        }

        # Enforce JSON output for structured evaluation
        if schema is not None:
            request_options["response_format"] = {
                "type": "json_object"
            }

        response = self.client.chat.completions.create(
            **request_options
        )

        result = response.choices[0].message.content

        if not result:
            raise ValueError("Ollama returned an empty response.")

        # Validate JSON before returning it to DeepEval
        if schema is not None:
            json.loads(result)

        return result

    async def a_generate(self, prompt: str, schema=None, **kwargs) -> str:

        return await asyncio.to_thread(
            self.generate,
            prompt,
            schema=schema,
            **kwargs
        )

    def get_model_name(self) -> str:
        return self.model_name
