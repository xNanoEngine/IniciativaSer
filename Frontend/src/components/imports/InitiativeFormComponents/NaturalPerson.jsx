import React, { useState } from "react";

const NaturalPerson = () => {
  const [mostrarSeccion, setMostrarSeccion] = useState(false);
  return (
    <div>
      <button
        className="initiativeButton mt-4"
        onClick={() => setMostrarSeccion(!mostrarSeccion)}
      >
        Persona Natural
      </button>
      {mostrarSeccion && (
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

export default NaturalPerson;
