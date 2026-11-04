import os
import torch
import ollama

from dotenv import load_dotenv
from pinecone import Pinecone
from transformers import AutoTokenizer, AutoModelForMaskedLM


# Step 1: Load environment variables
load_dotenv()


# Step 2: Connect to Pinecone
pc = Pinecone(
    api_key=os.getenv("PINECONE_API_KEY")
)

index = pc.Index("hybrid-rag-index")


# Step 3: Load SPLADE model
model_name = "naver/splade-cocondenser-ensembledistil"

tokenizer = AutoTokenizer.from_pretrained(model_name)

model = AutoModelForMaskedLM.from_pretrained(model_name)

model.eval()


# Step 4: Generate dense query embedding
def generate_dense_embedding(query):

    response = ollama.embed(
        model="nomic-embed-text",
        input=query
    )

    return response["embeddings"][0]


# Step 5: Generate sparse query embedding
def generate_sparse_embedding(query):

    inputs = tokenizer(
        query,
        return_tensors="pt",
        truncation=True,
        max_length=512
    )

    with torch.no_grad():

        outputs = model(**inputs)

        logits = outputs.logits

        relu_log = torch.log1p(torch.relu(logits))

        attention_mask = inputs["attention_mask"].unsqueeze(-1)

        relu_log = relu_log * attention_mask

        sparse_vector = torch.max(relu_log, dim=1).values.squeeze()

    indices = torch.nonzero(sparse_vector).squeeze(-1)

    values = sparse_vector[indices]

    return {
        "indices": indices.tolist(),
        "values": values.tolist()
    }


# Step 6: Hybrid search function
def hybrid_search(query, alpha=0.5, top_k=5):

    # Generate query embeddings
    dense_vector = generate_dense_embedding(query)

    sparse_vector = generate_sparse_embedding(query)

    # Apply alpha weighting
    dense_vector = [value * alpha for value in dense_vector]

    sparse_values = [
        value * (1 - alpha)
        for value in sparse_vector["values"]
    ]

    # Search Pinecone
    results = index.query(
        vector=dense_vector,
        sparse_vector={
            "indices": sparse_vector["indices"],
            "values": sparse_values
        },
        top_k=top_k,
        include_metadata=True
    )

    return results


# Step 7: Test hybrid search
if __name__ == "__main__":

    query = "What is the maximum scholarship amount?"

    results = hybrid_search(query)

    print("\nHYBRID SEARCH RESULTS")
    print("-" * 50)

    for match in results["matches"]:

        print("\nScore:", match["score"])

        print("Page:", match["metadata"]["page"] + 1)

        print("Content:", match["metadata"]["text"])

        print("-" * 50)