import React, { useState, useEffect } from "react";
import { DocumentFilters } from "../constants";
import SearchHeader from "../components/imports/SearchHeader";
import SearchForm from "../components/imports/SearchForm";
import FilterSearch from "../components/imports/FilterSearch";
import Footer from "../components/imports/Footer";
import TablesDocument from "../components/imports/TablesDocument";

const DocumentSearch = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [documentBusqueda, setDocumentBusqueda] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({});
  useEffect(() => {
    const lastDocument = localStorage.getItem("lastDocument");
    if (lastDocument) {
      setInputValue(lastDocument);
      setDocumentBusqueda(lastDocument);
    }
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    setDocumentBusqueda(inputValue);
    setCurrentPage(1);
    localStorage.setItem("lastDocument", inputValue);
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
            filters={DocumentFilters}
            reference="/document"
            subTitle="Búsqueda de documentos"
            onSelectionChange={(type, selectedItems) =>
              handleSelectionChange(type, selectedItems)
            }
          />
          <div className="space-y-14 md:w-5/6">
            <TablesDocument
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              busqueda={documentBusqueda}
              filters={selectedFilters}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocumentSearch;
