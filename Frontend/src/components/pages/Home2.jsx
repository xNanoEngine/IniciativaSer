import React from "react";
import BarraNav from "../imports/BarraNav";
import Footer from "../imports/Footer";
const Home2 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff] justify-center ">
      <div className="flex-grow">
        <section className="sm:py-16 py-6 flex justify-center flex-col bg-slate-100 w-screen border-t-black border-t-2 border-b-black border-b-2">
          <div className="flex justify-center sm:mb-16 mb-6 z-[1] text-center">
            <h1 className="leading-tight">
              Bienvenido(a) al
              <br /> Sistema de Información
              <br /> Cultural de Los Ríos
            </h1>
          </div>
          <div className="flex items-center md:items-stretch md:justify-center flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-6 ">
            <div className="w-[90%] md:w-2/6">
              <BarraNav />
            </div>
            <button className="w-1/2 md:w-1/12 border-cyan-200 bg-[#E1E4EB] rounded-lg">
              boton
            </button>
            <a className=" md:w-2/12 text-[#666666] font-custom_Syne text-base rounded-lg py-2 cursor-pointer">
              [+] Búsqueda avanzada
            </a>
          </div>
        </section>
        <div className="flex flex-col items-center mt-28 space-y-16">
          <div className="flex flex-col text-[#1f1f1f] font-custom_Syne space-y-16">
            <h1 className="text-center">Programas SEREMI</h1>
            <p className="text-lg text-center">
              So I started to walk into the water. I won't lie to you boys, I{" "}
              <br />
              was terrified. But I pressed on, and as I made my way past the{" "}
              <br />
              breakers a strange calm came over me. I don't know if it was{" "}
              <br />
              divine intervention or the kinship of all living things but I tell{" "}
              <br />
              you Jerry at that moment, I was a marine biologist. <br />
            </p>
          </div>
          <div>
            <p>imagenes</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home2;
