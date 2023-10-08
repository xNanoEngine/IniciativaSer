import React, { useState } from "react";
import { culturalSpaceTypes } from "../../../constants";
import { CulturalSpaceSchema } from "../../validations/CulturalSpaceValidation";
import Combobox from "../Combobox";

const CulturalSpace = ({ onSubmit }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errors, setErrors] = useState({});
  const handleOptionChange = (key, option) => {
    setSelectedOptions((prevOptions) => ({ ...prevOptions, [key]: option }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Valida los datos con el esquema Yup importado
      await CulturalSpaceSchema.validate(
        {
          culturalSpaceName: document
            .getElementById("culturalSpaceName")
            .value.trim(),
          address: document.getElementById("address").value.trim(),
          culturalSpaceTypes: selectedOptions.culturalSpaceTypes,
        },
        { abortEarly: false }
      );

      // Si la validación es exitosa, continúa con el envío del formulario
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      data.selectedOptions = selectedOptions;
      onSubmit(data, true);
      setErrors({});
    } catch (validationErrors) {
      // Si hay errores de validación, actualiza el estado de errores
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
      onSubmit({}, false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="initiativeContainer h-full">
      <div className="flex flex-col ml-4">
        <div className="flex flex-col md:flex-row justify-left space-x-4">
          <div className="flex flex-col mt-6 md:mt-0">
            <label className="block ml-1">Nombre del espacio Cultural:</label>
            <input
              type="text"
              id="culturalSpaceName"
              name="culturalSpaceName"
              className={`w-full px-4 py-2 rounded-md border ${
                errors.culturalSpaceName ? "border-red-500" : ""
              }`}
              placeholder="Respuesta..."
            />
            {errors.culturalSpaceName && (
              <span className="text-red-500">{errors.culturalSpaceName}</span>
            )}
          </div>
          <div className="flex flex-col mt-6 md:mt-0">
            <label className="block ml-1">Dirección:</label>
            <input
              type="text"
              id="address"
              name="address"
              className={`w-72 px-4 py-2 rounded-md border ${
                errors.address ? "border-red-500" : ""
              }`}
              placeholder="Respuesta..."
            />
            {errors.address && (
              <span className="text-red-500">{errors.address}</span>
            )}
          </div>
          <Combobox
            data={culturalSpaceTypes}
            label={"Tipo de espacio cultural"}
            prop={"w-52 mt-6"}
            onChange={(option) =>
              handleOptionChange("culturalSpaceTypes", option)
            }
            error={errors.culturalSpaceTypes}
          />
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

export default CulturalSpace;
