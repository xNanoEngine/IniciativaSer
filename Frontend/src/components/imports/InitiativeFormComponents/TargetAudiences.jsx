import React, { useState } from "react";
import { targetType } from "../../../constants";
import Combobox from "../Combobox";

const TargetAudiences = ({ onSubmit }) => {
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
      <div className="flex flex-col ml-4">
        <div className="flex flex-col md:flex-row justify-left space-x-4">
          <Combobox
            data={targetType}
            label={"Tipo de Público Objetivo"}
            prop={"w-60 mt-6"}
            onChange={(option) => handleOptionChange("targetType", option)}
          />
          <div className="flex flex-col mt-6 md:mt-0">
            <label className="block ml-1">
              Público objetivo de la iniciativa (cantidad de personas):
            </label>
            <input
              type="text"
              id="targetAmount"
              name="targetAmount"
              className="w-full px-4 py-2 rounded-md border"
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

export default TargetAudiences;
