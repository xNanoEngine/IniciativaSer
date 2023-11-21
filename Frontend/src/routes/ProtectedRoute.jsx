import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyToken } from "../utils/authUtils";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      const rol = localStorage.getItem("rol");

      if (!token || !rol) {
        localStorage.clear();
        setIsAuth(false);
        navigate("/login");
        return;
      }

      try {
        const isValidToken = await verifyToken(token, rol);

        if (isValidToken) {
          setIsAuth(true);
        } else {
          throw new Error("Invalid Token");
        }
      } catch (error) {
        localStorage.clear();
        setIsAuth(false);
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);

  return isAuth ? children : null;
};

export default ProtectedRoute;
