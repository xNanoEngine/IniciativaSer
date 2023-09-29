import React, { useState } from "react";
import { targetType } from "../../../constants";
import { TargetAudiencesSchema } from "../../validations/TargetAudiencesValidation";
import Combobox from "../Combobox";

const TargetAudiences = ({ onSubmit }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errors, setErrors] = useState({});
  const handleOptionChange = (key, option) => {
    setSelectedOptions((prevOptions) => ({ ...prevOptions, [key]: option }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Valida los datos con el esquema Yup importado
      await TargetAudiencesSchema.validate(
        {
          targetAmount: document.getElementById("targetAmount").value.trim(),
          targetType: selectedOptions.targetType,
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
          <Combobox
            data={targetType}
            label={"Tipo de Público Objetivo"}
            prop={"w-60 mt-6"}
            onChange={(option) => handleOptionChange("targetType", option)}
            error={errors.targetType}
          />
          <div className="flex flex-col mt-6 md:mt-0">
            <label className="block ml-1">
              Público objetivo de la iniciativa (cantidad de personas):
            </label>
            <input
              type="text"
              id="targetAmount"
              name="targetAmount"
              className={`w-full px-4 py-2 rounded-md border ${
                errors.targetAmount ? "border-red-500" : ""
              }`}
              placeholder="Respuesta..."
            />
            {errors.targetAmount && (
              <span className="text-red-500">{errors.targetAmount}</span>
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

export default TargetAudiences;
