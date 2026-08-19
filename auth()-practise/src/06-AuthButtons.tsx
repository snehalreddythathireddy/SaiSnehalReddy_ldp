import { useAuth0 } from "@auth0/auth0-react";

const AuthButtons = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  return (
    <section>
      <h2>Practice 06: Auth Buttons</h2>

      {isAuthenticated ? (
        <button
          onClick={() =>
            logout({
              logoutParams: {
                returnTo: window.location.origin,
              },
            })
          }
        >
          Log Out
        </button>
      ) : (
        <button onClick={() => loginWithRedirect()}>
          Sign In
        </button>
      )}
    </section>
  );
};

export default AuthButtons;