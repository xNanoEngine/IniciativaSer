import React, { useState } from "react";
import Footer from "../components/imports/Footer";
import ProgramSeremi from "../components/imports/ProgramSeremi";
// import { useFilter } from "../hook/useFilter";
import { useFilterContext } from "../context/filters";
import { useNavigate } from "react-router-dom";
const Home2 = () => {
  const navigate = useNavigate();
  const { busqueda, setBusqueda } = useFilterContext();
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = () => {
    localStorage.setItem("lastSearch", inputValue);
    setBusqueda(inputValue);
    navigate("/search");
  };
  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff] justify-center ">
      <div className="flex-grow mb-10">
        <section className="sm:py-16 py-6 flex justify-center flex-col bg-slate-100 w-screen border-b-black border-b-2">
          <div className="flex justify-center sm:mb-16 mb-6 z-[1] text-center">
            <h1 className="leading-tight">
              Bienvenido(a) al
              <br /> Sistema de Información
              <br /> Cultural de Los Ríos
            </h1>
          </div>
          <div className="flex items-center md:items-stretch md:justify-center flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-6 ">
            <form
              className="flex flex-col w-full items-center space-y-4 md:space-y-0 md:flex-row md:justify-center md:space-x-4"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                id="busqueda"
                className="w-3/4 md:w-2/5 px-4 py-2 rounded-md border-black border-2 focus:outline-none"
                placeholder="Buscar Información"
                value={inputValue} // Enlazar el valor del input al estado local
                onChange={(e) => handleInputChange(e)} // Manejador de cambios para actualizar el estado local
              />
              <button
                className="w-1/2 h-10 md:w-1/12 bg-yellow-200 border-black border-2 rounded-lg hover:opacity-50"
                type="submit"
              >
                Buscar
              </button>
              <a
                href="/search"
                className=" md:w-2/12 text-gray-400 font-custom_Syne text-base rounded-lg py-2 cursor-pointer hover:text-black"
              >
                [+] Búsqueda avanzada
              </a>
            </form>
          </div>
        </section>
        <div className="flex flex-col items-center mt-20 md:mt-28 space-y-16 h-full w-full">
          <div className="flex flex-col text-[#1f1f1f] font-custom_Syne space-y-6 md:space-y-14">
            <h1 className="text-center">Programas SEREMI</h1>
            <div className="mx-auto text-center text-sm w-full line-clamp-6 md:w-2/5 md:line-clamp-6 md:text-lg">
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
