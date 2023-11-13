// context/filters.js

import { createContext, useContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [busqueda, setBusqueda] = useState("");
  const [filters, setFilters] = useState({});

  const updateFilters = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  return (
    <FilterContext.Provider
      value={{ busqueda, filters, setBusqueda, updateFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error(
      "useFilterContext debe ser utilizado dentro de un FilterProvider"
    );
  }
  return context;
};
