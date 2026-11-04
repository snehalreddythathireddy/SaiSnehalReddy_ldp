import os
from dotenv import load_dotenv
from pinecone import Pinecone

# Load environment variables
load_dotenv()

# Read Pinecone API key
api_key = os.getenv("PINECONE_API_KEY")

if not api_key:
    raise ValueError("Pinecone API key not found!")

# Connect to Pinecone
pc = Pinecone(api_key=api_key)

print("Successfully connected to Pinecone!")

# Display available indexes
indexes = pc.list_indexes()

print("\nAvailable Pinecone indexes:")
print(indexes)

# Index configuration
index_name = "hybrid-rag-index"

existing_indexes = pc.list_indexes().names()

if index_name not in existing_indexes:

    pc.create_index(
        name=index_name,
        dimension=768,
        metric="dotproduct",
        spec={
            "serverless": {
                "cloud": "aws",
                "region": "us-east-1"
            }
        }
    )

    print(f"Index '{index_name}' created successfully!")

else:
    print(f"Index '{index_name}' already exists!")