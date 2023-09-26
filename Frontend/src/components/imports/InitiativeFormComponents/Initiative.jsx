import React, { useState } from "react";
import {
  initiativeArea,
  initiativeComponent,
  initiativeConcurseLine,
  initiativeType,
} from "../../../constants";
import Combobox from "../Combobox";

const Initiative = ({ onSubmit }) => {
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
            <label className="block ml-1">Nombre de la iniciativa:</label>
            <input
              type="text"
              id="initiativeName"
              name="initiativeName"
              className="w-80 px-4 py-2 rounded-md border"
              placeholder="Respuesta..."
            />
          </div>
          <Combobox
            data={initiativeType}
            label={"Tipo de iniciativa"}
            prop={"w-52 mt-6"}
            onChange={(option) => handleOptionChange("initiativeType", option)}
          />
          <Combobox
            data={initiativeComponent}
            label={"Componente"}
            prop={"w-52 mt-6"}
            onChange={(option) =>
              handleOptionChange("initiativeComponent", option)
            }
          />
          <Combobox
            data={initiativeConcurseLine}
            label={"Línea concurso"}
            prop={"w-52 mt-6"}
            onChange={(option) =>
              handleOptionChange("initiativeConcurseLine", option)
            }
          />
          <Combobox
            data={initiativeArea}
            label={"Disciplina-Área"}
            prop={"w-52 mt-6"}
            onChange={(option) => handleOptionChange("initiativeArea", option)}
          />
        </div>
        <div className="flex flex-col md:ml-6 md:justify-left">
          <label className="block ml-1">Descripcion de la iniciativa:</label>
          <textarea
            type="text"
            id="initiativeDescription"
            name="initiativeDescription"
            className="w-3/4 h-44 px-4 py-2 rounded-md border resize-none"
            placeholder="Respuesta..."
          />{" "}
        </div>
        <div className="flex flex-row justify-left space-x-4">
          <div className="flex flex-col md:ml-6 md:justify-left">
            <label className="block ml-1">Fecha de inicio:</label>
            <input
              type="date"
              name="initiativeInitDate"
              className="rounded-md p-2 border border-gray-300"
            />
          </div>
          <div className="flex flex-col md:ml-6 md:justify-left">
            <label className="block ml-1">Fecha de fin:</label>
            <input
              type="date"
              name="initiativeEndDate"
              className="rounded-md p-2 border border-gray-300"
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

export default Initiative;
