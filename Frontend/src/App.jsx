import React from "react";
import { Navbar, Home, User, Paper, Home2 } from "./components/pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-[#ffffff]  overflow-hidden">
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>
      <Router>
        <Routes>
          <Route path="/usuarios" element={<User />} />
          <Route path="/papers" element={<Paper />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
      {/* "bg-primary flex justify-center items-start xl:max-w-[1280px] w-full" */}
      <div className="bg-[#ffffff] flex justify-center">
        <Router>
          <Routes>
            <Route path="/" element={<Home2 />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
