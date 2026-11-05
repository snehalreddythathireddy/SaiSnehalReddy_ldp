
from pymilvus import MilvusClient, DataType

DB_PATH = "./infosys_milvus.db"
COLLECTION_NAME = "infosys_documents"
EMBEDDING_DIMENSION = 768


def create_collection():
    client = MilvusClient(DB_PATH)

    # Remove the old collection if it exists
    if client.has_collection(COLLECTION_NAME):
        print("Existing collection found. Dropping it...")
        client.drop_collection(COLLECTION_NAME)

    # Define the collection schema
    schema = client.create_schema(
        auto_id=False,
        enable_dynamic_field=False
    )

    # Primary key
    schema.add_field(
        field_name="id",
        datatype=DataType.INT64,
        is_primary=True
    )

    # Original text
    schema.add_field(
        field_name="text",
        datatype=DataType.VARCHAR,
        max_length=12000
    )

    # Embedding vector
    schema.add_field(
        field_name="embedding",
        datatype=DataType.FLOAT_VECTOR,
        dim=EMBEDDING_DIMENSION
    )

    # Document metadata
    schema.add_field(
        field_name="source",
        datatype=DataType.VARCHAR,
        max_length=512
    )

    schema.add_field(
        field_name="document_type",
        datatype=DataType.VARCHAR,
        max_length=100
    )

    schema.add_field(
        field_name="page_number",
        datatype=DataType.INT64
    )

    schema.add_field(
        field_name="chunk_index",
        datatype=DataType.INT64
    )

    schema.add_field(
        field_name="file_path",
        datatype=DataType.VARCHAR,
        max_length=2048
    )

    # Create vector index
    index_params = client.prepare_index_params()

    index_params.add_index(
        field_name="embedding",
        index_type="AUTOINDEX",
        metric_type="COSINE"
    )

    # Create collection with schema and index
    client.create_collection(
        collection_name=COLLECTION_NAME,
        schema=schema,
        index_params=index_params
    )

    print("\nMilvus connection successful!")
    print("Collection created:", COLLECTION_NAME)

    print("\nCollection details:")
    print(client.describe_collection(COLLECTION_NAME))

    return client


if __name__ == "__main__":
    client = create_collection()
    client.close()
