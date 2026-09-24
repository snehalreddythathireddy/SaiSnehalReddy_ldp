import { useAuth0 } from "@auth0/auth0-react";

const Authentication = () => {
  const { isAuthenticated, isLoading, error } = useAuth0();

  return (
    <section>
      <h2>Practice 03: Authentication</h2>

      <p>Loading: {isLoading ? "Yes" : "No"}</p>

      <p>
        Authenticated: {isAuthenticated ? "Yes" : "No"}
      </p>

      {error && <p>Error: {error.message}</p>}
    </section>
  );
};

export default Authentication;