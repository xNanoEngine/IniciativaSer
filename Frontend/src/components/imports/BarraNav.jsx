import React, { useState } from "react";

const BarraNav = () => {
  const [busqueda, setBusqueda] = useState("");
  return (
    <div>
      <form>
        <input
          type="text"
          id="busqueda"
          className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
          placeholder="Buscar Información"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </form>
    </div>
  );
};

export default BarraNav;
