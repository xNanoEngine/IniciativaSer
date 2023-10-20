import React, { useState } from "react";
import Footer from "../components/imports/Footer";
import ChecklistSearch from "../components/imports/InitiativeFormComponents/ChecklistSearch";

const AdvancedSearch = () => {
  const [busqueda, setBusqueda] = useState("");
  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff] justify-center ">
      <div className="flex-grow mb-10">
        <section className="sm:py-16 py-6 flex justify-center flex-col bg-slate-100 w-screen border-t-black border-t-2 border-b-black border-b-2">
          <div className="flex justify-center sm:mb-16 mb-6 z-[1] text-center">
            <h1 className="leading-tight">Búsqueda avanzada</h1>
          </div>
          <div className="mx-auto text-center text-sm w-full line-clamp-6 md:w-2/5 md:line-clamp-6 md:text-lg">
            Explora un abanico de oportunidades en este espacio dedicado a las
            búsquedas avanzadas. Aquí encontrarás diversas iniciativas que se
            adaptan a tus intereses, y podrás refinar tus resultados para
            encontrar exactamente lo que necesitas. Simplificamos tu búsqueda
            para que descubras más fácilmente las soluciones que buscas.
          </div>
        </section>
        <div className="mt-10">
          <form className="flex flex-col w-full h-full items-center space-y-4 md:space-y-0 md:flex-row md:justify-center md:space-x-4">
            <input
              type="text"
              id="busqueda"
              className="w-3/4 md:w-2/5 px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
              placeholder="Buscar Información"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <button
              className="w-1/2 h-10 md:w-1/12 bg-white border-black border-2 rounded-lg"
              onClick={""}
            >
              Buscar
            </button>
          </form>
        </div>
        <div className="flex flex-col space-x-10 mt-10 mx-10 md:flex-row  md:mt-20  md:mx-32 ">
          <div className="flex flex-col space-y-6 w-full md:w-1/6 justify-center">
            <h1 className="text-2xl">Filtrar por</h1>
            <div className="justify-normal space-y-4 ">
              <ChecklistSearch />
              <ChecklistSearch />
            </div>
          </div>
          <div className="w-5/6">a</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdvancedSearch;
