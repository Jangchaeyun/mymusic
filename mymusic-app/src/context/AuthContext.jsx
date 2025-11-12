import axios from "axios";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth는 AuthProvider 내에서 사용해야 합니다.");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const API_BASE_URL = "http://localhost:8080";

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("userToken"));
  const [loading, setLoading] = useState(false);

  const register = async (email, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/register`, {
        email,
        password,
      });
      if (response.status === 200) {
        return {
          success: true,
          message: "회원가입 성공",
        };
      } else {
        return {
          success: false,
          message: response.data.message || "회원가입 실패",
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error.response.data.message || "네트워크 에러",
      };
    }
  };

  const login = async (email, password) => {
    try {
      const response = axios.post(`${API_BASE_URL}/api/auth/login`, {
        email,
        password,
      });
      if (response.status === 200) {
        setToken(response.data.token);
        setUser({ email: response.data.user.email, role: response.data.role });
        localStorage.setItem("userToken", response.data.token);
        localStorage.setItem(
          "userData",
          JSON.stringify({
            email: response.data.email,
            role: response.data.role,
          })
        );
      }
    } catch (error) {}
  };

  const contextValue = {
    register,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
