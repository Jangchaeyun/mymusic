import { useAuth } from "../context/AuthContext";
import Login from "./Login";
import Register from "./Register";

const AuthWrapper = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated()) {
    return showRegister ? <Register /> : <Login />;
  }
  return children;
};

export default AuthWrapper;
