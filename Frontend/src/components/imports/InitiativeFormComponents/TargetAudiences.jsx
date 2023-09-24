import React, { useState } from "react";
import { upWhite, downWhite } from "../../../assets";
const TargetAudiences = () => {
  const [mostrarSeccion, setMostrarSeccion] = useState(false);
  return (
    <div>
      <button
        className="initiativeButton mt-4"
        onClick={() => setMostrarSeccion(!mostrarSeccion)}
      >
        Público Objetivo
        <img
          src={mostrarSeccion ? upWhite : downWhite}
          alt="arrow"
          className="w-10 h-10 object-contain ml-auto"
        />
      </button>
      {mostrarSeccion && (
        <div className="initiativeContainer  ">
          <div className="mt-4 ml-6">
            <label className="block">Nombre:</label>
            <input
              className="form-input mt-1 border-2 border-black block w-full"
              type="text"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TargetAudiences;
