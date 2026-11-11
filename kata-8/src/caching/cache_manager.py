
from cachetools import TTLCache

response_cache = TTLCache(maxsize=200, ttl=600)


def get_cached_response(query, context):
    return response_cache.get((query, context))


def store_response(query, context, answer):
    response_cache[(query, context)] = answer


def cache_stats():
    return {
        "cached_responses": len(response_cache),
        "maximum_size": response_cache.maxsize
    }
