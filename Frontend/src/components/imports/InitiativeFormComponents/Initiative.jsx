import React, { useState } from "react";
import {
  initiativeArea,
  initiativeComponent,
  initiativeConcurseLine,
  initiativeType,
} from "../../../constants";
import { InitiativeSchema } from "../../validations/InitiativeValidation";
import Combobox from "../Combobox";

const Initiative = ({ onSubmit }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errors, setErrors] = useState({});
  const handleOptionChange = (key, option) => {
    setSelectedOptions((prevOptions) => ({ ...prevOptions, [key]: option }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Valida los datos con el esquema Yup importado
      await InitiativeSchema.validate(
        {
          initiativeName: document
            .getElementById("initiativeName")
            .value.trim(),
          initiativeType: selectedOptions.initiativeType,
          initiativeComponent: selectedOptions.initiativeComponent,
          initiativeConcurseLine: selectedOptions.initiativeConcurseLine,
          initiativeArea: selectedOptions.initiativeArea,
          initiativeDescription: document
            .getElementById("initiativeDescription")
            .value.trim(),
          initiativeInitDate:
            document.getElementsByName("initiativeInitDate")[0].value,
          initiativeEndDate:
            document.getElementsByName("initiativeEndDate")[0].value,
        },
        { abortEarly: false }
      );

      // Si la validación es exitosa, continúa con el envío del formulario
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      // Agrega las opciones seleccionadas del Combobox a los datos del formulario
      data.selectedOptions = selectedOptions;
      onSubmit(data, true);
      setErrors({});
    } catch (validationErrors) {
      // Manejar el error de validación aquí
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors); // Establecer los errores de validación
      onSubmit({}, false);
    }
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
              className={`w-80 px-4 py-2 rounded-md border ${
                errors.initiativeName ? "border-red-500" : ""
              }`}
              placeholder="Respuesta..."
            />
            {errors.initiativeName && (
              <span className="text-red-500">{errors.initiativeName}</span>
            )}
          </div>
          <Combobox
            data={initiativeType}
            label={"Tipo de iniciativa"}
            prop={"w-52 mt-6"}
            onChange={(option) => handleOptionChange("initiativeType", option)}
            error={errors.initiativeType}
          />
          <Combobox
            data={initiativeComponent}
            label={"Componente"}
            prop={"w-52 mt-6"}
            onChange={(option) =>
              handleOptionChange("initiativeComponent", option)
            }
            error={errors.initiativeComponent}
          />
          <Combobox
            data={initiativeConcurseLine}
            label={"Línea concurso"}
            prop={"w-52 mt-6"}
            onChange={(option) =>
              handleOptionChange("initiativeConcurseLine", option)
            }
            error={errors.initiativeConcurseLine}
          />
          <Combobox
            data={initiativeArea}
            label={"Disciplina-Área"}
            prop={"w-52 mt-6"}
            onChange={(option) => handleOptionChange("initiativeArea", option)}
            error={errors.initiativeArea}
          />
        </div>
        <div className="flex flex-col md:ml-6 md:justify-left">
          <label className="block ml-1">Descripcion de la iniciativa:</label>
          <textarea
            type="text"
            id="initiativeDescription"
            name="initiativeDescription"
            className={`w-3/4 h-44 px-4 py-2 rounded-md border resize-none${
              errors.initiativeDescription ? "border-red-500" : ""
            }`}
            placeholder="Respuesta..."
          />
          {errors.initiativeDescription && (
            <span className="text-red-500">{errors.initiativeDescription}</span>
          )}
        </div>
        <div className="flex flex-row justify-left space-x-4">
          <div className="flex flex-col md:ml-6 md:justify-left">
            <label className="block ml-1">Fecha de inicio:</label>
            <input
              type="date"
              name="initiativeInitDate"
              className={`rounded-md p-2 border border-gray-300 ${
                errors.initiativeInitDate ? "border-red-500" : ""
              }`}
            />
            {errors.initiativeInitDate && (
              <span className="text-red-500">{errors.initiativeInitDate}</span>
            )}
          </div>
          <div className="flex flex-col md:ml-6 md:justify-left">
            <label className="block ml-1">Fecha de fin:</label>
            <input
              type="date"
              name="initiativeEndDate"
              className={`rounded-md p-2 border border-gray-300 ${
                errors.initiativeEndDate ? "border-red-500" : ""
              }`}
            />
            {errors.initiativeEndDate && (
              <span className="text-red-500">{errors.initiativeEndDate}</span>
            )}
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
