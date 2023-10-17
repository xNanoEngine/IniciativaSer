import React, { useState } from "react";

const BarraNav = () => {
  const [busqueda, setBusqueda] = useState("");
  return (
    <div className="w-full">
      <form className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-center md:space-x-4">
        <input
          type="text"
          id="busqueda"
          className="w-3/4 md:w-2/5 px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
          placeholder="Buscar Información"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <button className="w-1/2 md:w-1/12 border-cyan-200 bg-[#E1E4EB] rounded-lg">
          boton
        </button>
        <a className=" md:w-2/12 text-[#666666] font-custom_Syne text-base rounded-lg py-2 cursor-pointer">
          [+] Búsqueda avanzada
        </a>
      </form>
    </div>
  );
};

export default BarraNav;
