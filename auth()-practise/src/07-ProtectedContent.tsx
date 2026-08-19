import { useAuth0 } from "@auth0/auth0-react";

const ProtectedContent = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <section>
      <h2>Practice 07: Protected Content</h2>

      {isAuthenticated ? (
        <p>This content is available only to authenticated users.</p>
      ) : (
        <p>Please sign in to view this content.</p>
      )}
    </section>
  );
};

export default ProtectedContent;