
from pymilvus import MilvusClient, DataType
from src.config import COLLECTION_NAME

client = MilvusClient(uri="./milvus.db")


def initialize_database():
    if client.has_collection(COLLECTION_NAME):
        return

    schema = MilvusClient.create_schema(
        auto_id=True,
        enable_dynamic_field=True
    )

    schema.add_field(
        field_name="id",
        datatype=DataType.INT64,
        is_primary=True,
        auto_id=True
    )

    schema.add_field(
        field_name="company",
        datatype=DataType.VARCHAR,
        max_length=100
    )

    schema.add_field(
        field_name="text",
        datatype=DataType.VARCHAR,
        max_length=60000
    )

    schema.add_field(
        field_name="source",
        datatype=DataType.VARCHAR,
        max_length=100
    )

    schema.add_field(
        field_name="url",
        datatype=DataType.VARCHAR,
        max_length=2048
    )

    schema.add_field(
        field_name="embedding",
        datatype=DataType.FLOAT_VECTOR,
        dim=768
    )

    index_params = client.prepare_index_params()

    index_params.add_index(
        field_name="embedding",
        index_type="AUTOINDEX",
        metric_type="COSINE"
    )

    client.create_collection(
        collection_name=COLLECTION_NAME,
        schema=schema,
        index_params=index_params
    )

    for company in ["Google", "Microsoft", "Amazon", "Infosys"]:
        client.create_partition(
            collection_name=COLLECTION_NAME,
            partition_name=company.lower()
        )

    print("Milvus collection and partitions created")


def insert_documents(records):
    for company in ["Google", "Microsoft", "Amazon", "Infosys"]:
        company_records = [
            record for record in records
            if record["company"].lower() == company.lower()
        ]

        if not company_records:
            continue

        client.insert(
            collection_name=COLLECTION_NAME,
            partition_name=company.lower(),
            data=company_records
        )
