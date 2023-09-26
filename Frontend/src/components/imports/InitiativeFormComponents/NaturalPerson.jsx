import React, { useState } from "react";
import { personRole, gender, country } from "../../../constants";
import Combobox from "../Combobox";

const NaturalPerson = ({ onSubmit }) => {
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
      <div className="flex flex-col">
        <div className="flex flex-col items-center md:ml-6 md:space-x-4 md:flex-row md:justify-left">
          <div className="flex flex-col mt-6 md:mt-0">
            <label className="block ml-1">Rut de la persona Natural:</label>
            <input
              type="text"
              id="rutPerson"
              name="rutPerson"
              className="w-72 px-4 py-2 rounded-md border"
              placeholder="Respuesta..."
            />
          </div>
          <div className="flex flex-col mt-6 md:mt-0">
            <label className="block ml-1">Nombre de la persona Natural:</label>
            <input
              type="text"
              id="namePerson"
              name="rutPerson"
              className="w-72 px-4 py-2 rounded-md border"
              placeholder="Respuesta..."
            />
          </div>
          <div className="flex flex-col mt-6 md:mt-0">
            <label className="block ml-1">
              Apellido de la persona Natural:
            </label>
            <input
              type="text"
              id="lastNamePerson"
              name="lastNamePerson"
              className="w-72 px-4 py-2 rounded-md border"
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
        <div className="flex flex-col items-center md:ml-6 md:space-x-4 md:flex-row md:justify-left">
          <Combobox
            data={personRole}
            label={"Rol Persona Natural"}
            prop={"w-52 mt-6"}
            onChange={(option) =>
              handleOptionChange("naturalPersonRole", option)
            }
          />
          <Combobox
            data={gender}
            label={"Genero"}
            prop={"w-52 mt-6"}
            onChange={(option) => handleOptionChange("gender", option)}
          />
          <Combobox
            data={country}
            label={"Rol Persona Natural"}
            prop={"w-52 mt-6"}
            onChange={(option) =>
              handleOptionChange("Rol Persona Natural", option)
            }
          />
        </div>
      </div>
    </form>
  );
};

export default NaturalPerson;
