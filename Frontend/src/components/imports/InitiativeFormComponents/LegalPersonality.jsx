import React, { useState } from "react";
import { personRole, typeLegalPersonality } from "../../../constants";
import Combobox from "../Combobox";
const LegalPersonality = () => {
  const [mostrarSeccion, setMostrarSeccion] = useState(false);
  return (
    <div>
      <button
        className="initiativeButton"
        onClick={() => setMostrarSeccion(!mostrarSeccion)}
      >
        Personalidad Jurídica
      </button>
      {mostrarSeccion && (
        <div className="initiativeContainer h-52">
          <div className="ml-6 flex flex-row space-x-4 select-none">
            <Combobox
              data={typeLegalPersonality}
              label={"Tipo de Persona Jurídica"}
              weight={"w-72"}
            />
            <div className="flex flex-col">
              <label className="block ml-1">Nombre:</label>
              <input
                type="text"
                id="name"
                className="w-72 px-4 py-2 rounded-md border"
                placeholder="Respuesta..."
              />
            </div>
            <div className="flex flex-col">
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
              weight={"w-52"}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LegalPersonality;
