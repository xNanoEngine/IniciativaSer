import React, { useState } from "react";
const NaturalPerson = () => {
  return (
    <div className="initiativeContainer">
      <div className="flex flex-col items-center md:ml-6 md:space-x-4 md:flex-row md:justify-center">
        <div className="flex flex-col mt-6 md:mt-0">
          <label className="block ml-1">Rut de la persona Natural:</label>
          <input
            type="text"
            id="rutPerson"
            className="w-72 px-4 py-2 rounded-md border"
            placeholder="Respuesta..."
          />
        </div>
        <div className="flex flex-col mt-6 md:mt-0">
          <label className="block ml-1">Nombre de la persona Natural:</label>
          <input
            type="text"
            id="namePerson"
            className="w-72 px-4 py-2 rounded-md border"
            placeholder="Respuesta..."
          />
        </div>
        <div className="flex flex-col mt-6 md:mt-0">
          <label className="block ml-1">Apellido de la persona Natural:</label>
          <input
            type="text"
            id="lastNamePerson"
            className="w-72 px-4 py-2 rounded-md border"
            placeholder="Respuesta..."
          />
        </div>
        <button className="boton2 w-1/3 h-12 mt-6 md:mt-5 md:w-auto">
          Guardar
        </button>
      </div>
    </div>
  );
};

export default NaturalPerson;
