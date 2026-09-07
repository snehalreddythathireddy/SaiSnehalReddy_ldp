import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <section>
      <h2>Practice 02: Login</h2>

      <button
        onClick={() =>
          loginWithRedirect({
            appState: {
              returnTo: "/",
            },
          })
        }
      >
        Sign In
      </button>
    </section>
  );
};

export default Login;