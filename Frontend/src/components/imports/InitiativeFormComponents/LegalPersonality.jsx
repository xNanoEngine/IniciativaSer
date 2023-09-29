import React, { useState } from "react";
import { personRole, typeLegalPersonality } from "../../../constants";
import Combobox from "../Combobox";
import { LegalPersonalitySchema } from "../../validations/LegalPersonalityValidation";

const LegalPersonality = ({ onSubmit, setFormIsValid }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errors, setErrors] = useState({});
  const [rut, setRut] = useState("");
  const handleOptionChange = (key, option) => {
    setSelectedOptions((prevOptions) => ({ ...prevOptions, [key]: option }));
  };

  const handleRutChange = (event) => {
    let value = event.target.value;

    // Eliminar cualquier carácter que no sea un dígito o la letra 'k' (para RUTs válidos)
    value = value.replace(/[^\dkK]/g, "");

    // Formatear el RUT con puntos y guión
    if (value.length >= 2) {
      if (value.length <= 8) {
        // RUT de 8 dígitos (1.234.567-8)
        value = value.replace(
          /^(\d{1})(\d{0,3})(\d{0,3})([\dkK])?$/,
          (_, p1, p2, p3, p4) =>
            `${p1}${p2 ? "." + p2 : ""}${p3 ? "." + p3 : ""}${
              p4 ? "-" + p4 : ""
            }`
        );
      } else {
        // RUT de 9 dígitos (12.345.678-9)
        value = value.replace(
          /^(\d{1,2})(\d{0,3})(\d{0,3})([\dkK])?$/,
          (_, p1, p2, p3, p4) =>
            `${p1}${p2 ? "." + p2 : ""}${p3 ? "." + p3 : ""}${
              p4 ? "-" + p4 : ""
            }`
        );
      }
    }

    // Actualizar el estado del RUT
    setRut(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Valida los datos con el esquema Yup importado
      await LegalPersonalitySchema.validate(
        {
          name: document.getElementById("name").value.trim(),
          rut: rut.trim(),
          typeLegalPersonality: selectedOptions.typeLegalPersonality,
          juridicPersonRole: selectedOptions.juridicPersonRole,
        },
        { abortEarly: false }
      );

      // Si la validación es exitosa, continúa con el envío del formulario
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      data.selectedOptions = selectedOptions;
      data.rut = rut;
      onSubmit(data, true);
      setErrors({});
    } catch (validationErrors) {
      // Si hay errores de validación, actualiza el estado de errores

      const newErrors = {};
      validationErrors.inner?.forEach((error) => {
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
            data={typeLegalPersonality}
            label={"Tipo de Persona Jurídica"}
            prop={"w-72 mt-6"}
            onChange={(option) =>
              handleOptionChange("typeLegalPersonality", option)
            }
            error={errors.typeLegalPersonality}
          />
          <div className="flex flex-col mt-6 md:mt-0">
            <label className="block ml-1">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              className={`w-72 px-4 py-2 rounded-md border ${
                errors.name ? "border-red-500" : ""
              }`}
              placeholder="Respuesta..."
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </div>
          <div className="flex flex-col mt-6 md:mt-0">
            <label className="block ml-1">Rut:</label>
            <input
              type="text"
              id="rut"
              name="rut"
              value={rut} // Usar el valor formateado del RUT
              onChange={handleRutChange}
              className={`w-72 px-4 py-2 rounded-md border ${
                errors.rut ? "border-red-500" : ""
              }`}
            />
            {errors.rut && <span className="text-red-500">{errors.rut}</span>}
          </div>
          <Combobox
            data={personRole}
            label={"Rol Persona Jurídica"}
            prop={"w-52 mt-6"}
            onChange={(option) =>
              handleOptionChange("juridicPersonRole", option)
            }
            error={errors.juridicPersonRole}
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

export default LegalPersonality;
