import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import AuthProviderPractice from "./01-AuthProvider";
import Login from "./02-Login";
import Authentication from "./03-Authentication";
import User from "./04-User";
import Logout from "./05-Logout";
import AuthButtons from "./06-AuthButtons";
import ProtectedContent from "./07-ProtectedContent";
import ProtectedRoute from "./08-ProtectedRoute";
import ProtectedLogin from "./09-ProtectedLogin";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>React Auth0 Practice</h1>

        <nav>
          <Link to="/">Home</Link>{" "}
          <Link to="/protected">Protected</Link>{" "}
          <Link to="/protected-login">Protected Login</Link>
        </nav>

        <Routes>
          
          <Route
            path="/"
            element={
              <>
                <AuthProviderPractice />
                <Login />
                <Authentication />
                <User />
                <Logout />
                <AuthButtons />
                <ProtectedContent />
              </>
            }
          />

          
          <Route
            path="/protected"
            element={<ProtectedRoute />}
          />

          
          <Route
            path="/protected-login"
            element={<ProtectedLogin />}
          />

          
          <Route
            path="*"
            element={
              <section>
                <h2>404 - Page Not Found</h2>
                <p>The page you are looking for does not exist.</p>
                <Link to="/">Go to Home</Link>
              </section>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;