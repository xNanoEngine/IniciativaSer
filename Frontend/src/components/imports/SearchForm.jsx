import React from "react";

const SearchForm = ({ inputValue, handleInputChange, handleSumbit }) => {
  return (
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
  );
};

export default SearchForm;
