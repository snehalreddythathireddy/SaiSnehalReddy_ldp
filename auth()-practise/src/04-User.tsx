import { useAuth0 } from "@auth0/auth0-react";

const User = () => {
  const { user } = useAuth0();

  return (
    <section>
      <h2>Practice 04: User Information</h2>

      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
    </section>
  );
};

export default User;