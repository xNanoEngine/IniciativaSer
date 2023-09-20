import React, { useState } from "react";

const InitiativeForm = () => {
  const [mostrarSeccion1, setMostrarSeccion1] = useState(false);
  const [mostrarSeccion2, setMostrarSeccion2] = useState(false);
  return (
    <div className="p-4 mt-5 flex flex-col ">
      <button
        className="initiativeButton"
        onClick={() => setMostrarSeccion1(!mostrarSeccion1)}
      >
        Sección 1
      </button>
      {mostrarSeccion1 && (
        <div className="initiativeContainer ">
          <div className="mt-4 ml-6">
            <label className="block">Nombre:</label>
            <input
              className="form-input mt-1 border-2 border-black block w-full"
              type="text"
            />
          </div>
        </div>
      )}

      <button
        className="initiativeButton mt-4"
        onClick={() => setMostrarSeccion2(!mostrarSeccion2)}
      >
        Sección 2
      </button>
      {mostrarSeccion2 && (
        <div className="initiativeContainer">
          <div className="mt-4 ml-6">
            <label className="block">Apellido:</label>
            <input className="form-input mt-1 block w-full" type="text" />
          </div>
        </div>
      )}
    </div>
  );
};

export default InitiativeForm;
