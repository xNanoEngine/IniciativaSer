import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [busqueda, setBusqueda] = useState("");

  return (
    <FilterContext.Provider value={{ busqueda, setBusqueda }}>
      {children}
    </FilterContext.Provider>
  );
};
