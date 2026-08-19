import { useAuth0 } from "@auth0/auth0-react";

const ProtectedLogin = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <section>
      <h2>Practice 09: Protected Login</h2>

      <p>Loading: {isLoading ? "Yes" : "No"}</p>
      <p>Authenticated: {isAuthenticated ? "Yes" : "No"}</p>

      {isAuthenticated && (
        <p>You are authenticated and can access this page.</p>
      )}
    </section>
  );
};

export default ProtectedLogin;