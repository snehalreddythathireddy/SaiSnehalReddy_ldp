import { useSearchParams } from "react-router-dom";

const Products=()=> {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category");
  const search = searchParams.get("search");

  return (
    <div>
      <h1>Products Page</h1>

      <p>Category: {category}</p>
      <p>Search: {search}</p>

      <button
        onClick={() => setSearchParams({ category: "shoes" })}
      >
        Shoes
      </button>

      <button
        onClick={() => setSearchParams({ category: "shirts" })}
      >
        Shirts
      </button>

      <button
        onClick={() => setSearchParams({ search: "laptop" })}
      >
        Search Laptop
      </button>
    </div>
  );
}

export default Products;