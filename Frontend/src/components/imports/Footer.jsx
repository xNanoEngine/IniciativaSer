import React from "react";
import { icon } from "../../assets";
const Footer = () => {
  return (
    <footer className="mt-4 bg-[#1A202C] p-5 space-y-4">
      <div className="mx-auto flex justify-center mb-4">
        <a href="/" className="">
          <img src={icon} alt="Logo" className="w-[30px] h-[30px]" />
        </a>
      </div>
      <div className="flex flex-row justify-center space-x-3 text-sm md:text-base">
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
    </footer>
  );
};

export default Footer;
