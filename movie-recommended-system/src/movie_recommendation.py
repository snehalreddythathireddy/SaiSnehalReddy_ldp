import pandas as pd
from sentence_transformers import SentenceTransformer
import chromadb

# Step 1: Load the movie dataset
df = pd.read_csv("data/movies.csv")

# Step 2: Display dataset information
print("MOVIE DATASET LOADED")
print("-" * 50)

print("Total movies:", len(df))

print("\nColumn names:")
print(df.columns.tolist())

# Step 3: Display movie records
print("\nFirst 5 movies:")

print(df.head())

# Step 4: Check missing values
print("\nMissing values:")
print(df.isnull().sum())

# Step 5: Load embedding model
model = SentenceTransformer("all-MiniLM-L6-v2")

# Step 6: Extract movie descriptions
descriptions = df["Description"].tolist()

# Step 7: Generate embeddings
embeddings = model.encode(descriptions)

# Step 8: Display embedding information
print("\nMOVIE EMBEDDINGS GENERATED")
print("-" * 50)

print("Total embeddings:", len(embeddings))
print("Embedding dimensions:", len(embeddings[0]))

print("\nFirst movie embedding:")
print(embeddings[0][:10])

# Step 9: Create ChromaDB client
client = chromadb.PersistentClient(path="./chroma_db")

# Step 10: Create collection
collection = client.get_or_create_collection(
    name="movie_recommendations"
)

# Step 11: Insert movie data
collection.add(
    ids=df["Title"].tolist(),

    documents=descriptions,
    embeddings=embeddings.tolist(),
    metadatas=[
        {
            "genre": row["Genre"],
            "director": row["Director"]
        }
        for _, row in df.iterrows()
    ]
)

# Step 12: Verify stored records
print("\nMOVIES STORED IN CHROMADB")
print("-" * 50)

print("Total records:", collection.count())

# Step 12: Get user preferences
query = input("\nEnter your movie preference: ")

genre = input("Enter preferred genre: ")

director = input("Enter preferred director: ")


# Step 13: Generate query embedding
query_embedding = model.encode(query).tolist()


# Step 14: Create metadata filter
filters = {
    "$and": [
        {"genre": {"$eq": genre}},
        {"director": {"$eq": director}}
    ]
}


# Step 15: Retrieve top 5 movies
results = collection.query(
    query_embeddings=[query_embedding],
    n_results=5,
    where=filters
)


# Step 16: Display recommendations
print("\nTOP 5 MOVIE RECOMMENDATIONS")
print("-" * 50)

for i, title in enumerate(results["ids"][0]):

    print(f"\nRecommendation {i + 1}")
    print("Movie:", title)
    print("Description:", results["documents"][0][i])
    print("Genre:", results["metadatas"][0][i]["genre"])
    print("Director:", results["metadatas"][0][i]["director"])