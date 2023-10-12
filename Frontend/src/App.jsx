import React, { useEffect } from "react";
import { Navbar, Home, Login, Initiative } from "./pages";
import ProtectedRoute from "./routes/ProtectedRoute";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";

const LoginWithRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuth = localStorage.getItem("token");

  useEffect(() => {
    if (isAuth && location.pathname === "/login") {
      navigate("/");
    }
  }, [navigate, isAuth, location.pathname]);

  if (isAuth) {
    return null; // No renderizar nada en lugar de <Login />
  }

  return <Login />;
};

const App = () => {
  const isAuth = localStorage.getItem("token");
  const loginPath = location.pathname === "/login";
  return (
    <div className="bg-[#ffffff] overflow-hidden">
      <Router>
        {(!loginPath || isAuth) && (
          <div className="sm:px-16 px-6 flex justify-center items-center">
            <div className="xl:max-w-[1280px] w-full">
              <Navbar isAuth={isAuth} />
            </div>
          </div>
        )}
        <Routes>
          <Route
            path="/initiative"
            element={
              <ProtectedRoute>
                <Initiative />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginWithRedirect />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
