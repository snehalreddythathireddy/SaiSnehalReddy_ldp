
from src.rag import rag_pipeline
from src.ollama_model import OllamaModel

from deepeval.test_case import LLMTestCase
from deepeval.metrics import (
    AnswerRelevancyMetric,
    FaithfulnessMetric,
    ContextualPrecisionMetric,
    ContextualRecallMetric,
    ContextualRelevancyMetric
)
from deepeval import evaluate


# 1. Define evaluation questions and expected answers

evaluation_data = [
    {
        "question": "What is the minimum attendance required for semester exams?",
        "expected_answer": "Students must maintain at least 75% attendance."
    },
    {
        "question": "Can students participate in campus placements?",
        "expected_answer": "Students can participate in placements if they satisfy the company's eligibility criteria."
    },
    {
        "question": "Who should students contact for examination-related queries?",
        "expected_answer": "Students should contact the examination cell."
    },
    {
        "question": "When should students complete course registration?",
        "expected_answer": "Students must complete course registration before the semester registration deadline."
    }
]


# 2. Initialize local Mistral as the evaluation judge

judge_model = OllamaModel()


# 3. Define all five evaluation metrics

metrics = [

    AnswerRelevancyMetric(
        threshold=0.7,
        model=judge_model,
        async_mode=False
    ),

    FaithfulnessMetric(
        threshold=0.7,
        model=judge_model,
        async_mode=False
    ),

    ContextualPrecisionMetric(
        threshold=0.7,
        model=judge_model,
        async_mode=False
    ),

    ContextualRecallMetric(
        threshold=0.7,
        model=judge_model,
        async_mode=False
    ),

    ContextualRelevancyMetric(
        threshold=0.7,
        model=judge_model,
        async_mode=False
    )
]


# 4. Execute RAG and create test cases

test_cases = []

for item in evaluation_data:

    question = item["question"]

    # Generate answer and retrieve context
    answer, retrieved_context = rag_pipeline(question)

    # Create DeepEval test case
    test_case = LLMTestCase(
        input=question,
        actual_output=answer,
        expected_output=item["expected_answer"],
        retrieval_context=retrieved_context
    )

    test_cases.append(test_case)

    print("\nQuestion:", question)
    print("Expected Answer:", item["expected_answer"])
    print("Generated Answer:", answer)
    print("Retrieved Context:", retrieved_context)


# 5. Run DeepEval evaluation

if __name__ == "__main__":

    print("\nStarting Complete DeepEval Evaluation...\n")

    results = evaluate(
        test_cases=test_cases,
        metrics=metrics
    )

    print("\n========================================")
    print("     RAG EVALUATION COMPLETED")
    print("========================================")

