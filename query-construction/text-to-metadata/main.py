# Sample music database with metadata

documents = [
    {
        "song": "Love Story",
        "artist": "Taylor Swift",
        "genre": "Pop",
        "year": 2008
    },
    {
        "song": "Blank Space",
        "artist": "Taylor Swift",
        "genre": "Pop",
        "year": 2014
    },
    {
        "song": "Roar",
        "artist": "Katy Perry",
        "genre": "Pop",
        "year": 2013
    },
    {
        "song": "Shape of You",
        "artist": "Ed Sheeran",
        "genre": "Pop",
        "year": 2017
    },
    {
        "song": "Perfect",
        "artist": "Ed Sheeran",
        "genre": "Romantic",
        "year": 2017
    }
]


# User query
user_query = "Find pop songs by Taylor Swift released before 2020"


# Query construction
structured_query = {
    "query": "pop songs",
    "filter": {
        "artist": "Taylor Swift",
        "genre": "Pop",
        "year": {"$lt": 2020}
    }
}


# Display constructed query
print("USER QUERY:")
print(user_query)

print("\nSTRUCTURED QUERY:")
print(structured_query)


# Apply metadata filters
results = []

for document in documents:

    if (
        document["artist"] == structured_query["filter"]["artist"]
        and document["genre"] == structured_query["filter"]["genre"]
        and document["year"] < structured_query["filter"]["year"]["$lt"]
    ):
        results.append(document)


# Display results
print("\nSEARCH RESULTS:")

for result in results:
    print(result)