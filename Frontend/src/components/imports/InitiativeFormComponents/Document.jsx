import React, { useState } from "react";
import { financing } from "../../../constants";
import Combobox from "../Combobox";

const Document = ({ onSubmit }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const handleOptionChange = (key, option) => {
    setSelectedOptions((prevOptions) => ({ ...prevOptions, [key]: option }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    // Agrega las opciones seleccionadas del Combobox a los datos del formulario
    data.selectedOptions = selectedOptions;
    onSubmit(data);
  };
  return (
    <form onSubmit={handleSubmit} className="initiativeContainer h-full">
      <div className="flex flex-col space-y-2">
        <div className="flex flex-col items-center md:ml-6 md:space-x-4 md:flex-row md:justify-left">
          <div className="flex flex-col mt-6 md:mt-0">
            <label className="block ml-1">
              Titulo del documento (producto digital):
            </label>
            <input
              type="text"
              id="documentName"
              name="documentName"
              className="w-full px-4 py-2 rounded-md border"
              placeholder="Respuesta..."
            />
          </div>
          <div className="flex flex-col md:ml-6 md:justify-left">
            <label className="block ml-1">
              Fecha de publicación del documento:
            </label>
            <input
              type="date"
              name="documentDate"
              className="rounded-md p-2 border border-gray-300"
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:ml-6 md:space-x-4 md:flex-row md:justify-left">
          <Combobox
            data={financing}
            label={"Tipo de documento"}
            prop={"w-52 mt-6"}
            onChange={(option) => handleOptionChange("documentType", option)}
          />
          <div className="flex flex-col mt-6 md:mt-0">
            <label className="block ml-1">
              Fuente (Nombre de la institución donde se publica el documento):
            </label>
            <input
              type="text"
              id="initiativeName"
              name="initiativeName"
              className="w-full px-4 py-2 rounded-md border"
              placeholder="Respuesta..."
            />
          </div>
          <div className="flex flex-col mt-6 md:mt-0">
            <label className="block ml-1">Palabras claves:</label>
            <input
              type="text"
              id="keyWords"
              name="keyWords"
              className="w-full px-4 py-2 rounded-md border"
              placeholder="Respuesta..."
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:ml-6 md:space-x-4 md:flex-row md:justify-left">
          <div className="flex flex-col mt-6 md:mt-0">
            <label className="block ml-1">Enlace del documento (URL):</label>
            <input
              type="text"
              id="documentUrl"
              name="documentUrl"
              className="w-80 px-4 py-2 rounded-md border"
              placeholder="Respuesta..."
            />
          </div>
          <button
            type="submit"
            className="boton2 w-1/3 h-12 mt-6 md:mt-5 md:w-auto"
          >
            Guardar
          </button>
        </div>
      </div>
    </form>
  );
};

export default Document;
