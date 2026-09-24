import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <section>
      <h2>Practice 08: Protected Route</h2>
      <p>This route is available only to authenticated users.</p>
    </section>
  );
};

export default ProtectedRoute;