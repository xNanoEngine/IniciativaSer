import React, { useEffect } from "react";
import {
  Navbar,
  Home,
  Login,
  Initiative,
  AdvancedSearch,
  ViewInitiative,
  DocumentSearch,
  ViewDocument,
  UserRecords,
  UserManagment,
  Statistics
} from "./pages";
import ProtectedRoute from "./routes/ProtectedRoute";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { FilterProvider } from "./context/filters";

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
    return null;
  }

  return <Login />;
};

const App = () => {
  const isAuth = localStorage.getItem("token");
  const loginPath = location.pathname === "/login";
  return (
    <div className="bg-[#ffffff] overflow-hidden">
      <FilterProvider>
        <Router>
          {(!loginPath || isAuth) && (
            <div className="sm:px-16 px-6 flex justify-center items-center border-b-2 border-black">
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
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginWithRedirect />} />
            <Route path="/search" element={<AdvancedSearch />} />
            <Route path="/document" element={<DocumentSearch />} />
            <Route path="/view" element={<ViewInitiative />} />;
            <Route path="/viewDocument" element={<ViewDocument />} />;
            <Route path="/estadisticas" element={<Statistics />}/>;
            <Route
              path="/records"
              element={
                <ProtectedRoute>
                  <UserRecords />
                </ProtectedRoute>
              }
            />
            ;
            <Route
              path="/users"
              element={
                <ProtectedRoute>
                  <UserManagment />
                </ProtectedRoute>
              }
            />
            ;
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </FilterProvider>
    </div>
  );
};

export default App;
