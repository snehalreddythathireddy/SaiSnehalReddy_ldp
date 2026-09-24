import { useNavigate } from "react-router-dom";

const Login=()=> {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };
  const handleGoBack =()=>{
    navigate(-1);
  }

  return (
    <div>
      <h1>Login Page</h1>

      <button onClick={handleLogin}>
        Login
      </button>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
}

export default Login;