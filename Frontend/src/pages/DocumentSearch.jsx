import React, { useState, useEffect } from "react";
import { SearchFilters } from "../constants";
import { useFilter } from "../hook/useFilter";
import SearchHeader from "../components/imports/SearchHeader";
import SearchForm from "../components/imports/SearchForm";
import FilterSearch from "../components/imports/FilterSearch";
import Footer from "../components/imports/Footer";
import TablesInitiatives from "../components/imports/TablesInitiatives";

const DocumentSearch = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { busqueda, setBusqueda } = useFilter();
  const [inputValue, setInputValue] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({});
  useEffect(() => {
    if (busqueda) {
      setInputValue(busqueda);
    }
    const lastSearch = localStorage.getItem("lastSearch");
    if (lastSearch) {
      setInputValue(lastSearch);
      setBusqueda(lastSearch);
    }
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    setBusqueda(inputValue);
    setCurrentPage(1);
    localStorage.setItem("lastSearch", inputValue);
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
        <SearchHeader
          title="Búsqueda de documentos"
          desc="Explora un abanico de oportunidades en este espacio dedicado a las
            búsquedas de documentos. Aquí encontrarás diversos documentos que se
            adaptan a tus intereses, y podrás refinar tus resultados para
            encontrar exactamente lo que necesitas. Simplificamos tu búsqueda
            para que descubras más fácilmente las soluciones que buscas."
        />
        <div className="mt-10">
          <SearchForm
            inputValue={inputValue}
            handleInputChange={handleInputChange}
            handleSumbit={handleSumbit}
          />
        </div>
        <div className="flex flex-col space-y-10 mt-10 mx-10 md:flex-row md:mt-20 md:mx-32 md:space-x-10 md:space-y-0">
          <FilterSearch
            filters={SearchFilters}
            reference="/document"
            subTitle="Búsqueda de documentos"
            onSelectionChange={(type, selectedItems) =>
              handleSelectionChange(type, selectedItems)
            }
          />
          <div className="space-y-14 md:w-5/6">
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

export default DocumentSearch;
