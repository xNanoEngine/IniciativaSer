import React from "react";
import { socialMedia } from "../../constants";
import BarraNav from "../busqueda/BarraNav";
const Home2 = () => {
  return (
    <div className="h-screen flex flex-col">
      <section className="sm:py-16 py-6 flex justify-center flex-col bg-slate-100 w-screen border-t-black border-t-2 border-b-black border-b-2">
        {/* Eliminamos el fondo azul */}
        <div className="flex justify-center sm:mb-16 mb-6  z-[1] text-center">
          <h3 className="font-['Syne Bold'] font-bold xs:text-[48px] text-[40px] text-[#1f1f1f] leading-tight">
            Bienvenido(a) al
            <br /> Sistema de Información
            <br /> Cultural de Los Ríos
          </h3>
        </div>
        <div className="flex flex-row justify-center space-x-6 ">
          <div className="w-2/6">
            <BarraNav />
          </div>
          <button className="w-1/12 border-cyan-200 bg-[#E1E4EB] rounded-lg">
            boton
          </button>
          <a className="w-2/12 text-[#666666] font-['Syne Bold'] text-base rounded-lg py-2 cursor-pointer">
            [+] Búsqueda avanzada
          </a>
        </div>
        {/* <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] ">
          {socialMedia.map((media) => (
            <div key={media.name} className="px-10">
              <a href={media.link}>
                <img src={media.icon} className="h-[90px]" alt={media.name} />
              </a>
              <h2 className="font-poppins text-white py-4 text-center">
                {media.name}
              </h2>
            </div>
          ))}
        </div> */}
      </section>
    </div>
  );
};

export default Home2;
