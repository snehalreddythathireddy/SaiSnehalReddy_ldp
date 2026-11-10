import psycopg
from pgvector.psycopg import register_vector

from langchain_ollama import OllamaEmbeddings


# 1. Connect to PostgreSQL
conn = psycopg.connect(
    "dbname=music_db user=snehal host=localhost port=5432"
)

register_vector(conn)
cursor = conn.cursor()


# 2. Initialize embedding model
embeddings = OllamaEmbeddings(
    model="nomic-embed-text:latest"
)


# 3. Create table
cursor.execute("""
CREATE TABLE IF NOT EXISTS tracks (
    id SERIAL PRIMARY KEY,
    name TEXT,
    genre TEXT,
    description TEXT,
    embedding VECTOR(768)
)
""")

conn.commit()


# 4. Sample music data
songs = [
    ("Perfect", "Romantic", "A beautiful song about love"),
    ("Roar", "Pop", "An inspirational song about confidence"),
    ("Someone Like You", "Pop", "A sad song about heartbreak"),
    ("Shape of You", "Pop", "An upbeat song about attraction"),
    ("Photograph", "Romantic", "A nostalgic song about memories")
]


# 5. Insert songs and generate embeddings
for name, genre, description in songs:

    cursor.execute(
        "SELECT id FROM tracks WHERE name = %s",
        (name,)
    )

    if cursor.fetchone():
        continue

    embedding = embeddings.embed_query(description)

    cursor.execute("""
        INSERT INTO tracks (name, genre, description, embedding)
        VALUES (%s, %s, %s, %s)
    """, (name, genre, description, embedding))


conn.commit()


# 6. User query
user_query = input("What kind of songs are you looking for? ")

# SQL filter
genre = input("Enter genre (or leave empty): ")

# Generate query embedding
query_embedding = embeddings.embed_query(user_query)


# 7. Hybrid search: SQL + Semantic Search
if genre:

    cursor.execute("""
        SELECT name, genre, description
        FROM tracks
        WHERE genre = %s
        ORDER BY embedding <=> %s::vector
        LIMIT 3
    """, (genre, query_embedding))

else:

    cursor.execute("""
        SELECT name, genre, description
        FROM tracks
        ORDER BY embedding <=> %s::vector
        LIMIT 3
    """, (query_embedding,))


# 8. Display results
results = cursor.fetchall()

print("\nSEARCH RESULTS:")

for result in results:
    print(result)


cursor.close()
conn.close()