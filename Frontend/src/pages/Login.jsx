import React from "react";
import { icon } from "../assets";
import LoginForm from "../components/imports/LoginForm";
import Footer from "../components/imports/Footer";

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="flex justify-center flex-col bg-white w-screen ">
          <div className="flex justify-center text-center border-b-black border-b-2">
            <a href="/">
              <img
                src={icon}
                alt="Logo"
                className="w-[30px] h-[30px] mt-8 mb-8"
              />
            </a>
          </div>
          <div className="flex flex-col my-10 mx-10 md:mx-60 md:my-28">
            <div className="text-left border-b-black border-b-2">
              <h1 className="mb-8 leading-tight">Iniciar Sesión</h1>
            </div>
            <div className="flex flex-col mt-8 space-y-6 ">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
