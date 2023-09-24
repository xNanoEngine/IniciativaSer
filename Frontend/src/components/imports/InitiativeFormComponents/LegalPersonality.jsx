import React from "react";
import { personRole, typeLegalPersonality } from "../../../constants";
import Combobox from "../Combobox";
const LegalPersonality = () => {
  return (
    <div className="initiativeContainer h-full">
      <div className="flex flex-col items-center md:ml-6 md:space-x-4 md:flex-row md:justify-center">
        <Combobox
          data={typeLegalPersonality}
          label={"Tipo de Persona Jurídica"}
          prop={"w-72 mt-6"}
        />
        <div className="flex flex-col mt-6 md:mt-0">
          <label className="block ml-1">Nombre:</label>
          <input
            type="text"
            id="name"
            className="w-72 px-4 py-2 rounded-md border"
            placeholder="Respuesta..."
          />
        </div>
        <div className="flex flex-col mt-6 md:mt-0">
          <label className="block ml-1">Rut:</label>
          <input
            type="text"
            id="rut"
            className="w-72 px-4 py-2 rounded-md border"
            placeholder="Respuesta..."
          />
        </div>
        <Combobox
          data={personRole}
          label={"Rol Persona Jurídica"}
          prop={"w-52 mt-6"}
        />
        <button className="boton2 w-1/3 h-12 mt-6 md:mt-5 md:w-auto">
          Guardar
        </button>
      </div>
    </div>
  );
};

export default LegalPersonality;
