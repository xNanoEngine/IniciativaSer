import React from "react";
import BarraNav from "../components/imports/BarraNav";
import Footer from "../components/imports/Footer";
import ProgramSeremi from "../components/imports/ProgramSeremi";
const Home2 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff] justify-center ">
      <div className="flex-grow mb-10">
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
        <div className="flex flex-col items-center mt-28 space-y-16 h-full w-full">
          <div className="flex flex-col text-[#1f1f1f] font-custom_Syne space-y-14">
            <h1 className="text-center">Programas SEREMI</h1>
            <div className="mx-auto text-center w-2/5 line-clamp-6 text-lg">
              Bienvenido al apartado de programas del Seremi de cultura de los
              rios. Aquí podras encontrar las diferentes iniciativas que son
              ingresadas en el sistema, estas son las ultimas actualizadas a la
              fecha de hoy. Puedes leer y visualizar cualquiera de ellas. Si te
              interesa alguna de estas, no dudes en dar ¡click!.
            </div>
          </div>
          <div className="">
            <ProgramSeremi />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home2;
