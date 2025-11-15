import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Login from "./Login";
import Register from "./Register";

const AuthWrapper = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [showRegister, setShowRegister] = useState(false);

  if (!isAuthenticated()) {
    return showRegister ? (
      <Register onSwitchToLogin={() => setShowRegister(false)} />
    ) : (
      <Login onSwitchToRegister={() => setShowRegister(true)} />
    );
  }
  return children;
};

export default AuthWrapper;
