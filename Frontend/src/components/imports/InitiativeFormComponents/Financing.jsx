import React, { useState } from "react";
import { financing } from "../../../constants";
import { FinancingSchema } from "../../validations/FinancingValidation";
import Combobox from "../Combobox";

const Financing = ({ onSubmit }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errors, setErrors] = useState({});
  const handleOptionChange = (key, option) => {
    setSelectedOptions((prevOptions) => ({ ...prevOptions, [key]: option }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Valida los datos con el esquema Yup importado
      await FinancingSchema.validate(
        {
          budget: document.getElementById("budget").value.trim(),
          financing: selectedOptions.financing,
        },
        { abortEarly: false }
      );

      // Si la validación es exitosa, continúa con el envío del formulario
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      data.selectedOptions = selectedOptions;
      onSubmit(data);
      setErrors({});
    } catch (validationErrors) {
      // Si hay errores de validación, actualiza el estado de errores
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="initiativeContainer h-full">
      <div className="flex flex-col ml-4">
        <div className="flex flex-col md:flex-row justify-left space-x-4">
          <Combobox
            data={financing}
            label={"Financiamiento"}
            prop={"w-60 mt-6"}
            onChange={(option) => handleOptionChange("financing", option)}
            error={errors.financing}
          />
          <div className="flex flex-col mt-6 md:mt-0">
            <label className="block ml-1">Presupuesto:</label>
            <input
              type="text"
              id="budget"
              name="budget"
              className={`w-full px-4 py-2 rounded-md border ${
                errors.budget ? "border-red-500" : ""
              }`}
              placeholder="Respuesta..."
            />
            {errors.budget && (
              <span className="text-red-500">{errors.budget}</span>
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

export default Financing;
