import {
  useCallback,
  useEffect,
  useState,
} from "react";

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useFetch<T>(
  url: string
): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  const [fetchCount, setFetchCount] =
    useState(0);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result: T =
        await response.json();

      setData(result);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData, fetchCount]);

  const refetch = () => {
    setFetchCount((prev) => prev + 1);
  };

  return {
    data,
    loading,
    error,
    refetch,
  };
}