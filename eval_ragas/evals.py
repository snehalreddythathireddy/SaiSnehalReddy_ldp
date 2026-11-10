
import os
import asyncio
from pathlib import Path

from dotenv import load_dotenv
from openai import OpenAI

from ragas import Dataset, experiment
from ragas.llms import llm_factory
from ragas.metrics import DiscreteMetric

from src.rag import default_rag_client


# Load environment variables
load_dotenv()


# Connect to local Ollama
ollama_client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY"),
    base_url=os.getenv("OPENAI_BASE_URL")
)


# Initialize College FAQ application
rag_client = default_rag_client(
    llm_client=ollama_client,
    logdir="evals/logs"
)


# Initialize Mistral as evaluation LLM
llm = llm_factory(
    "mistral",
    provider="openai",
    client=ollama_client
)


# Step 1: Create evaluation dataset
def load_dataset():

    dataset = Dataset(
        name="college_faq_dataset",
        backend="local/csv",
        root_dir="evals"
    )

    data_samples = [

        {
            "question": "What is the minimum attendance required for semester exams?",
            "grading_notes": "Students need at least 75% attendance to be eligible for semester examinations."
        },

        {
            "question": "When are internal examinations conducted?",
            "grading_notes": "Internal examinations are conducted before semester-end examinations."
        },

        {
            "question": "Who should students contact for examination-related queries?",
            "grading_notes": "Students should contact the examination cell."
        },

        {
            "question": "What is required before semester registration?",
            "grading_notes": "Students must register for courses before the semester registration deadline."
        },

        {
            "question": "What are the requirements for placement eligibility?",
            "grading_notes": "Students can apply for placements if they satisfy the company's eligibility criteria."
        },

        {
            "question": "Does the college provide free laptops?",
            "grading_notes": "The provided context does not contain information about free laptops. The assistant should say that the information is unavailable."
        }
    ]

    for sample in data_samples:
        dataset.append(sample)

    dataset.save()

    return dataset


# Step 2: Define custom evaluation metric
my_metric = DiscreteMetric(

    name="answer_quality",

    prompt="""
    Evaluate the generated answer using the grading notes.

    Return 'pass' if the answer correctly covers
    the important information.

    Return 'fail' if the answer is incorrect,
    irrelevant, or misses important information.

    Be strict about factual correctness.

    Generated Answer:
    {response}

    Grading Notes:
    {grading_notes}
    """,

    allowed_values=["pass", "fail"]
)


# Step 3: Define experiment
@experiment()
async def run_experiment(row):

    # Generate answer
    response = rag_client.query(row["question"])

    # Evaluate generated answer
    score = my_metric.score(
        llm=llm,
        response=response["answer"],
        grading_notes=row["grading_notes"]
    )

    # Return experiment result
    return {
        **row,
        "response": response["answer"],
        "score": score.value,
        "log_file": response["logs"]
    }


# Step 4: Run experiment
async def main():

    dataset = load_dataset()

    print("\nDATASET LOADED SUCCESSFULLY")
    print("-" * 50)
    print(dataset)

    results = await run_experiment.arun(dataset)

    print("\nEXPERIMENT RESULTS")
    print("-" * 50)
    print(results)

    results.save()

    print("\nEvaluation completed!")

    print(
        "Logs folder:",
        Path("evals/logs").resolve()
    )

    print(
        "Experiments folder:",
        Path("experiments").resolve()
    )


if __name__ == "__main__":

    asyncio.run(main())
