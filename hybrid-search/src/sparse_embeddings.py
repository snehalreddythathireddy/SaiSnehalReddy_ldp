import torch
from transformers import AutoTokenizer, AutoModelForMaskedLM

from src.chunking import chunks


# Step 1: Load SPLADE model
model_name = "naver/splade-cocondenser-ensembledistil"

tokenizer = AutoTokenizer.from_pretrained(model_name)

model = AutoModelForMaskedLM.from_pretrained(model_name)

model.eval()


# Step 2: Function to generate sparse embeddings
def generate_sparse_embedding(text):

    inputs = tokenizer(
        text,
        return_tensors="pt",
        truncation=True,
        max_length=512
    )

    with torch.no_grad():

        outputs = model(**inputs)

        logits = outputs.logits

        # Apply SPLADE activation
        relu_log = torch.log1p(torch.relu(logits))

        # Ignore padding tokens
        attention_mask = inputs["attention_mask"].unsqueeze(-1)

        relu_log = relu_log * attention_mask

        # Pool token weights
        sparse_vector = torch.max(relu_log, dim=1).values.squeeze()

    # Extract non-zero vocabulary dimensions
    indices = torch.nonzero(sparse_vector).squeeze(-1)

    values = sparse_vector[indices]

    return {
        "indices": indices.tolist(),
        "values": values.tolist()
    }


# Step 3: Generate sparse embeddings for all chunks
sparse_embeddings = []

for index, chunk in enumerate(chunks):

    embedding = generate_sparse_embedding(chunk.page_content)

    sparse_embeddings.append(embedding)

    print(f"Generated sparse embedding for chunk {index + 1}")


# Step 4: Display results
print("\nSPARSE EMBEDDINGS GENERATED")
print("-" * 50)

print("Total chunks:", len(chunks))

print("Non-zero dimensions in first embedding:",
      len(sparse_embeddings[0]["indices"]))

print("\nFirst 10 indices:")
print(sparse_embeddings[0]["indices"][:10])

print("\nFirst 10 values:")
print(sparse_embeddings[0]["values"][:10])