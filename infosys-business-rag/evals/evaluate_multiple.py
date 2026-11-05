
from deepeval.test_case import LLMTestCase

from deepeval.metrics import (
    AnswerRelevancyMetric,
    FaithfulnessMetric,
    ContextualPrecisionMetric,
    ContextualRecallMetric
)

from src.generation import retrieve_documents, generate_answer
from src.evaluation_model import MistralEvaluationModel


# ------------------------------------------------
# Step 1: Define evaluation dataset
# ------------------------------------------------

test_cases = [

    {
        "question": "What are Infosys's major business domains?",

        
        "expected_answer": """
        According to page 79 of the Infosys Integrated Annual Report,
        the company's business segments primarily include:

        1. Financial Services and Insurance
        2. Manufacturing
        3. Retail, Consumer Packaged Goods and Logistics
        4. Energy, Utilities, Resources and Services
        5. Communication, Telecom OEM and Media
        6. Hi-Tech
        7. Life Sciences and Healthcare
        8. All other segments.

        The other segments represent the operating segments of
        businesses in India, Japan, China, Infosys Public Services,
        and identified enterprises in public services.
        """

    },

    {
        "question": (
            "What is Infosys announcing about its "
            "Pocharam Development Center in Hyderabad?"
        ),

        "expected_answer": """
        Infosys announced the expansion of its Pocharam
        Development Center in Hyderabad with a new
        1.1 million square feet facility. The expansion
        includes a new software development block and
        adds 10,000 seats. It strengthens Infosys's
        presence in Telangana and supports capabilities
        in AI, Cloud, Cybersecurity and digital services.
        """
    },

    {
        "question": (
            "What is discussed in the Infosys blog titled "
            "AI for the Rest of the Enterprise?"
        ),

        
        "expected_answer": """
        The blog titled AI for the Rest of the Enterprise discusses
        how AI and automation can be adopted across the wider
        enterprise rather than being limited to traditional technology
        use cases. It discusses assessing enterprise readiness across
        multiple dimensions, including current AI and automation
        strategy, data strategy, organizational readiness, and
        technology readiness.
        """

    }

]


# ------------------------------------------------
# Step 2: Create evaluation metrics
# ------------------------------------------------

def create_metrics(evaluator):

    return [

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


# ------------------------------------------------
# Step 3: Evaluate one question
# ------------------------------------------------

def evaluate_question(test, evaluator):

    question = test["question"]

    expected_answer = test["expected_answer"]

    print("\n" + "=" * 70)
    print("QUESTION:", question)
    print("=" * 70)

    # Retrieve documents
    documents = retrieve_documents(
        question,
        top_k=8
    )

    retrieval_context = [
        document["text"]
        for document in documents
    ]

    print("\nRetrieved chunks:", len(documents))

    print("\nRetrieved sources:")

    for document in documents:

        print(
            document["source"],
            "| Page:",
            document["page_number"],
            "| Type:",
            document["document_type"]
        )

    if not retrieval_context:
        print("No relevant documents retrieved.")
        return []

    # Generate answer
    actual_answer = generate_answer(
        question,
        top_k=8
    )

    # Create DeepEval test case
    test_case = LLMTestCase(
        input=question,
        actual_output=actual_answer,
        expected_output=expected_answer,
        retrieval_context=retrieval_context
    )

    # Evaluate metrics
    metrics = create_metrics(evaluator)

    results = []

    for metric in metrics:

        print("\n" + "-" * 60)
        print("Metric:", metric.__class__.__name__)
        print("-" * 60)

        try:

            metric.measure(test_case)

            score = metric.score
            success = metric.is_successful()

            print("Score:", score)
            print("Success:", success)

            if metric.reason:
                print("Reason:", metric.reason)

            results.append({
                "question": question,
                "metric": metric.__class__.__name__,
                "score": score,
                "success": success
            })

        except Exception as error:

            print("Evaluation error:", error)

            results.append({
                "question": question,
                "metric": metric.__class__.__name__,
                "score": None,
                "success": False
            })

    return results


# ------------------------------------------------
# Step 4: Evaluate all questions
# ------------------------------------------------

def run_multiple_evaluations():

    print("\n" + "=" * 70)
    print("INFOSYS RAG - MULTI-QUESTION EVALUATION")
    print("=" * 70)

    evaluator = MistralEvaluationModel()

    all_results = []

    for test in test_cases:

        results = evaluate_question(
            test,
            evaluator
        )

        all_results.extend(results)

    # Final summary
    print("\n" + "=" * 70)
    print("FINAL EVALUATION SUMMARY")
    print("=" * 70)

    for result in all_results:

        print("\nQuestion:", result["question"])
        print("Metric:", result["metric"])
        print("Score:", result["score"])
        print("Passed:", result["success"])

    print("\nTotal metric evaluations:", len(all_results))

    successful = sum(
        1 for result in all_results
        if result["success"]
    )

    print("Successful evaluations:", successful)

    print("\nMulti-question evaluation completed!")


# ------------------------------------------------
# Step 5: Main execution
# ------------------------------------------------

if __name__ == "__main__":

    run_multiple_evaluations()
