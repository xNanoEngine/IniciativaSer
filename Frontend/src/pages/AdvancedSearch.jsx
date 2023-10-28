import React, { useState, useEffect } from "react";
import Footer from "../components/imports/Footer";
import ChecklistSearch from "../components/imports/ChecklistSearch";
import TablesInitiatives from "../components/imports/TablesInitiatives";
import { initiativeFilters, comuneFilters } from "../constants";
import { useFilter } from "../hook/useFilter";

const AdvancedSearch = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { busqueda, setBusqueda } = useFilter();
  const [inputValue, setInputValue] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    setBusqueda(inputValue);
    setCurrentPage(1);
  };

  const handleSelectionChange = (type, selectedItems) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = {
        ...prevFilters,
        [type]: selectedItems,
      };

      return updatedFilters;
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff] justify-center">
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
          <form
            className="flex flex-col w-full h-full items-center space-y-4 md:space-y-0 md:flex-row md:justify-center md:space-x-4"
            onSubmit={handleSumbit}
          >
            <input
              type="text"
              id="busqueda"
              className="w-3/4 md:w-2/5 px-4 py-2 rounded-md border-black border-2 focus:outline-none"
              placeholder="Buscar Información"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button
              className="w-1/2 h-10 md:w-1/12 bg-yellow-200 border-black border-2 rounded-lg hover:opacity-50"
              type="submit"
            >
              Buscar
            </button>
          </form>
        </div>
        <div className="flex flex-col space-y-10 mt-10 mx-10 md:flex-row md:mt-20 md:mx-32 md:space-x-10 md:space-y-0">
          <div className="flex flex-col space-y-6 md:w-1/6">
            <div className="flex flex-row space-x-3 text-xs font-custom_Syne text-gray-400 xl:text-base">
              <a href="/home">Home</a>
              <p>/</p>
              <a href="/search">Busqueda avanzada</a>
            </div>
            <h1 className="text-2xl">Filtrar por</h1>
            <div className="justify-normal space-y-4">
              <ChecklistSearch
                data={initiativeFilters}
                type="Iniciativa"
                singleSelect={true}
                onSelectionChange={(selectedItems) =>
                  handleSelectionChange("Iniciativa", selectedItems)
                }
              />
              <ChecklistSearch
                data={comuneFilters}
                type="Comuna"
                singleSelect={false}
                onSelectionChange={(selectedItems) =>
                  handleSelectionChange("Comuna", selectedItems)
                }
              />
            </div>
          </div>
          <div className="space-y-14 md:w-5/6">
            <div className="flex flex-col space-y-2">
              <h2 className="text-3xl font-bold font-custom_Syne">
                Resultados
              </h2>
              <h3 className="text-gray-600">Mostrando resultados aquí...</h3>
            </div>
            <div>
              {busqueda !== "" ? (
                <TablesInitiatives
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  busqueda={busqueda}
                  filters={selectedFilters}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdvancedSearch;
