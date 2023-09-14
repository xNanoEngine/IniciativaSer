import React, { useEffect } from "react";
import { Navbar, Home, User, Paper, Home2, Login } from "./components/pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const isLoginPage = location.pathname === "/login";
const isAuth = false; //localStorage.getItem("token");

const ProtectedRoute = ({ element: Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [navigate]);

  return isAuth ? <Component /> : null;
};

const App = () => {
  return (
    <div className="bg-[#ffffff]  overflow-hidden">
      {!isLoginPage && (
        <div className="sm:px-16 px-6 flex justify-center items-center">
          <div className="xl:max-w-[1280px] w-full">
            <Navbar isAuth={isAuth} />
          </div>
        </div>
      )}
      <Router>
        <Routes>
          <Route
            path="/initiative"
            element={<ProtectedRoute element={User} />}
          />
          <Route path="/usuarios" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/papers" element={<Paper />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home2 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
