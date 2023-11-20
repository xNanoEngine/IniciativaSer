import React, { useState, useEffect } from "react";
import { SearchFilters } from "../constants";
import { useFilterContext } from "../context/filters";
import SearchHeader from "../components/imports/SearchHeader";
import SearchForm from "../components/imports/SearchForm";
import FilterSearch from "../components/imports/FilterSearch";
import Footer from "../components/imports/Footer";
import TablesInitiatives from "../components/imports/TablesInitiatives";

const AdvancedSearch = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { busqueda, setBusqueda, filters, updateFilters } = useFilterContext();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (busqueda) {
      setInputValue(busqueda);
    } else {
      const lastSearch = localStorage.getItem("lastSearch");
      if (lastSearch) {
        setInputValue(lastSearch);
        setBusqueda(lastSearch);
      }
    }
  }, [busqueda, setBusqueda]);

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
    updateFilters({ [type]: selectedItems });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff] justify-center">
      <div className="flex-grow mb-10">
        <SearchHeader
          title="Búsqueda avanzada"
          desc="Explora un abanico de oportunidades en este espacio dedicado a las
            búsquedas avanzadas. Aquí encontrarás diversas iniciativas que se
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
            reference="/search"
            subTitle="Búsqueda avanzada"
            onSelectionChange={(type, selectedItems) =>
              handleSelectionChange(type, selectedItems)
            }
          />
          <div className="space-y-14 md:w-5/6">
            <TablesInitiatives
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              busqueda={busqueda}
              filters={filters}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdvancedSearch;
