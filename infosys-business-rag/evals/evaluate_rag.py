
from deepeval.test_case import LLMTestCase

from deepeval.metrics import (
    AnswerRelevancyMetric,
    FaithfulnessMetric,
    ContextualPrecisionMetric,
    ContextualRecallMetric
)

from src.generation import (
    retrieve_documents,
    generate_answer,
    TOP_K
)

from src.evaluation_model import MistralEvaluationModel



# Step 1: Define evaluation question

question = "What are Infosys's major business domains?"


# Expected answer based on the annual report
expected_answer = """
Infosys's business segments primarily include:

1. Financial Services and Insurance
2. Manufacturing
3. Retail, Consumer Packaged Goods and Logistics
4. Energy, Utilities, Resources and Services
5. Communication, Telecom OEM and Media
6. Hi-Tech
7. Life Sciences and Healthcare

Other segments include businesses in India, Japan,
China, Infosys Public Services and identified
enterprises in public services.

The expected answer is based on the Infosys annual
report, page 79.
"""


# Step 2: Run RAG evaluation

def run_evaluation():

    print("\n" + "=" * 60)
    print("INFOSYS RAG SYSTEM - DEEPEVAL EVALUATION")
    print("=" * 60)

    print("\nEvaluation Question:")
    print(question)

    # Retrieve documents from Milvus

    print("\nRetrieving documents from Milvus...")

    documents = retrieve_documents(
        question,
        top_k=TOP_K
    )

    retrieval_context = [
        document["text"]
        for document in documents
    ]

    print("Retrieved chunks:", len(retrieval_context))

    if not retrieval_context:
        print("No documents retrieved. Evaluation stopped.")
        return

    # Generate answer using Mistral
    
    print("\nGenerating answer using Mistral...")

    actual_answer = generate_answer(
        question,
        top_k=TOP_K
    )

    # Create DeepEval test case

    test_case = LLMTestCase(
        input=question,
        actual_output=actual_answer,
        expected_output=expected_answer,
        retrieval_context=retrieval_context
    )

    # Initialize evaluation model

    evaluator = MistralEvaluationModel()

    # Configure evaluation metrics
    
    metrics = [

        AnswerRelevancyMetric(
            threshold=0.5,
            model=evaluator,
            include_reason=True
        ),

        FaithfulnessMetric(
            threshold=0.5,
            model=evaluator,
            include_reason=True
        ),

        ContextualPrecisionMetric(
            threshold=0.5,
            model=evaluator,
            include_reason=True
        ),

        ContextualRecallMetric(
            threshold=0.5,
            model=evaluator,
            include_reason=True
        )

    ]

    # Run metrics synchronously

    print("\nStarting synchronous DeepEval evaluation...")

    evaluation_results = []

    for metric in metrics:

        print("\n" + "=" * 60)
        print("Evaluating:", metric.__class__.__name__)
        print("=" * 60)

        try:

            metric.measure(test_case)

            score = metric.score
            success = metric.is_successful()
            reason = metric.reason

            evaluation_results.append({
                "metric": metric.__class__.__name__,
                "score": score,
                "success": success
            })

            print("Score:", score)
            print("Success:", success)

            if reason:
                print("Reason:", reason)

        except Exception as error:

            print("Evaluation failed:", error)

            evaluation_results.append({
                "metric": metric.__class__.__name__,
                "score": None,
                "success": False
            })

    # Display final evaluation summary

    print("\n" + "=" * 60)
    print("FINAL EVALUATION SUMMARY")
    print("=" * 60)

    for result in evaluation_results:

        print(
            f"{result['metric']}: "
            f"{result['score']} "
            f"| Passed: {result['success']}"
        )

    print("\nDeepEval evaluation finished!")


# Step 3: Execute evaluation

if __name__ == "__main__":

    run_evaluation()
