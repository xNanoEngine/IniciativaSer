import React, { useState, useEffect } from "react";
import { personRole, typeLegalPersonality } from "../../../constants";
import Combobox from "../Combobox";
import { LegalPersonalitySchema } from "../../validations/LegalPersonalityValidation";

const LegalPersonality = ({ onSubmit, info }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errors, setErrors] = useState({});
  const [rut, setRut] = useState("");
  const [name, setName] = useState("");

  const handleOptionChange = (key, option) => {
    setSelectedOptions((prevOptions) => ({ ...prevOptions, [key]: option }));
  };
  const formatRut = (value) => {
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
    return value;
  };
  useEffect(() => {
    if (info && Object.keys(info).length > 0) {
      setRut(formatRut(info.rut || ""));
      setName(info.nombre || "");
      setSelectedOptions({
        typeLegalPersonality: info.typeLegalPersonality || "",
        juridicPersonRole: info.juridicPersonRole || "",
      });
    }
  }, [info]);

  const handleRutChange = (event) => {
    const value = event.target.value;
    const formattedRut = formatRut(value);
    setRut(formattedRut);
  };

  const handleRutBlur = () => {
    const formattedRut = formatRut(rut);
    setRut(formattedRut);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Valida los datos con el esquema Yup importado
      await LegalPersonalitySchema.validate(
        {
          name: name.trim(),
          rut: rut.trim(),
          typeLegalPersonality: selectedOptions.typeLegalPersonality,
          juridicPersonRole: selectedOptions.juridicPersonRole,
        },
        { abortEarly: false }
      );
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      data.name = data.name.trim();
      data.selectedOptions = selectedOptions;
      onSubmit(data, true);
      setErrors({});
    } catch (validationErrors) {
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
            label={
              info && Object.keys(info).length > 0
                ? info.typeLegalPersonality
                : "Tipo de Persona Jurídica"
            }
            prop={"w-72 mt-6"}
            onChange={(option) =>
              handleOptionChange("typeLegalPersonality", option)
            }
            value={selectedOptions.typeLegalPersonality}
            error={errors.typeLegalPersonality}
          />

          <div className="flex flex-col mt-6 md:mt-0">
            <label className="block ml-1">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-4 py-2 rounded-md border ${
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
              onBlur={handleRutBlur}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.rut ? "border-red-500" : ""
              }`}
              placeholder="Respuesta..."
            />
            {errors.rut && <span className="text-red-500">{errors.rut}</span>}
          </div>
          <Combobox
            data={personRole}
            label={
              info && Object.keys(info).length > 0
                ? info.juridicPersonRole
                : "Rol Persona Jurídica"
            }
            prop={"w-52 mt-6"}
            onChange={(option) =>
              handleOptionChange("juridicPersonRole", option)
            }
            value={selectedOptions.juridicPersonRole}
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
