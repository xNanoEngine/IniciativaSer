import React, { useState, useEffect } from "react";
import { financing } from "../../../constants";
import { FinancingSchema } from "../../validations/FinancingValidation";
import Combobox from "../Combobox";

const Financing = ({ onSubmit, info }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errors, setErrors] = useState({});
  const [budgetNumber, setbudgetNumber] = useState(0);
  const handleOptionChange = (key, option) => {
    setSelectedOptions((prevOptions) => ({ ...prevOptions, [key]: option }));
  };
  const handleNumberChange = (event) => {
    let value = event.target.value;
    value = value.replace(/\D/g, "");
    if (value.length > 1 && value.startsWith("0")) {
      value = value.slice(1);
    }
    setbudgetNumber(value);
  };
  useEffect(() => {
    if (info) {
      setbudgetNumber(info.budget || "");
      setSelectedOptions({
        financing: info.type || "",
      });
    }
  }, [info]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Valida los datos con el esquema Yup importado
      await FinancingSchema.validate(
        {
          budget: budgetNumber,
          financing: selectedOptions.financing,
        },
        { abortEarly: false }
      );
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      data.selectedOptions = selectedOptions;
      onSubmit(data, true);
      setErrors({});
    } catch (validationErrors) {
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
            data={financing}
            label={info ? info.type : "Financiamiento"}
            prop={"w-60 mt-6"}
            onChange={(option) => handleOptionChange("financing", option)}
            value={selectedOptions.financing}
            error={errors.financing}
          />
          <div className="flex flex-col mt-6 md:mt-0">
            <label className="block ml-1">Presupuesto:</label>
            <input
              type="number"
              id="budget"
              name="budget"
              value={budgetNumber}
              onChange={handleNumberChange}
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
