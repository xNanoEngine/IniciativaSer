import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyToken } from "../utils/authUtils";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuth(false);
        navigate("/");
        return;
      }

      const isValidToken = await verifyToken(token);

      if (isValidToken) {
        setIsAuth(true);
      } else {
        localStorage.clear();
        setIsAuth(false);
        window.location.reload();
      }
    };

    checkAuth();
  }, [navigate]);

  return isAuth ? children : null;
};

export default ProtectedRoute;
