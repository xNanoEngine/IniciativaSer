import React from "react";
import { icon } from "../../assets";
import LoginForm from "../imports/LoginForm";
const Login = () => {
  return (
    <div className="">
      <section className="flex justify-center flex-col bg-white w-screen ">
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
            <h3 className="font-['Syne Bold'] mb-8 font-bold md:text-[48px] text-[30px] text-[#1f1f1f] leading-tight">
              Iniciar Sesión
            </h3>
          </div>
          <div className="flex flex-col mt-8 space-y-6 ">
            <LoginForm />
          </div>
        </div>
      </section>
      <div className="bg-[#1A202C] w-screen flex flex-col mt-4">
        <div className="inline-block mx-auto">
          <a href="/" className="flex justify-center">
            <img
              src={icon}
              alt="Logo"
              className="w-[30px] h-[30px] mt-8 mb-4"
            />
          </a>
        </div>
        <div className="flex flex-row justify-center space-x-3 p-10 w-screen text-sm md:text-base">
          <p className="text-white">Copyright 2023 Company Name.</p>
          <a href="/" className="text-slate-500">
            Privacy Policy
          </a>
          <a href="/" className="text-slate-500">
            Terms & Conditions
          </a>
          <a href="/" className="text-slate-500">
            Cookie Policy
          </a>
          <a href="/" className="text-slate-500">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
