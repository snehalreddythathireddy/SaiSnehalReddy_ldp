import { useState } from "react";
import { getPostWithHeaders } from "./utils/service";
import type { Post } from "./utils/service";

const AxiosHeaders = () => {
  const [result, setResult] = useState<Post | null>(null);

  const handleRequest = async () => {
    const data = await getPostWithHeaders();

    setResult(data);
  };

  return (
    <div>
      <h1>Axios Headers</h1>

      <button onClick={handleRequest}>Send Request</button>

      {result && (
        <div>
          <h2>{result.title}</h2>
          <p>{result.body}</p>
        </div>
      )}
    </div>
  );
};

export default AxiosHeaders;