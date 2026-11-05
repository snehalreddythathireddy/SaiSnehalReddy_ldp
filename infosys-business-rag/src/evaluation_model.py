
import ollama
from pydantic import BaseModel
from deepeval.models import DeepEvalBaseLLM


class MistralEvaluationModel(DeepEvalBaseLLM):

    def __init__(self, model_name="mistral:latest"):
        self.model_name = model_name
        self.client = ollama.Client()

    def load_model(self):
        return self.client

    def generate(self, prompt: str, schema=None):

        response = self.client.chat(
            model=self.model_name,
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            options={
                "temperature": 0
            },
            format=schema.model_json_schema() if schema else ""
        )

        result = response["message"]["content"]

        # Return structured output when DeepEval requests a schema
        if schema:
            return schema.model_validate_json(result)

        return result

    async def a_generate(self, prompt: str, schema=None):

        client = ollama.AsyncClient()

        response = await client.chat(
            model=self.model_name,
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            options={
                "temperature": 0
            },
            format=schema.model_json_schema() if schema else ""
        )

        result = response["message"]["content"]

        if schema:
            return schema.model_validate_json(result)

        return result

    def get_model_name(self):
        return self.model_name


if __name__ == "__main__":

    evaluator = MistralEvaluationModel()

    test_prompt = """
    Explain what Infosys does in one sentence.
    """

    response = evaluator.generate(test_prompt)

    print("\nMistral Evaluation Model Test")
    print("Model:", evaluator.get_model_name())
    print("Response:", response)
