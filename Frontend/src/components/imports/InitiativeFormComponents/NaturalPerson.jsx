import React, { useState, useEffect } from "react";
import { personRole, gender, country } from "../../../constants";
import { NaturalPersonSchema } from "../../validations/NaturalPersonValidation";
import Combobox from "../Combobox";

const NaturalPerson = ({ onSubmit, info }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errors, setErrors] = useState({});
  const [rutPerson, setRut] = useState("");
  const [namePerson, setName] = useState("");
  const [lastNamePerson, setLastNamePerson] = useState("");

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
      setLastNamePerson(info.apellido || "");
      setSelectedOptions({
        personRole: info.typeNaturalPersonality || "",
        country: info.pais || "",
        gender: info.genero || "",
      });
    }
  }, [info]);
  const handleRutChange = (event) => {
    const value = event.target.value;
    const formattedRut = formatRut(value);
    setRut(formattedRut);
  };

  const handleRutBlur = () => {
    const formattedRut = formatRut(rutPerson);
    setRut(formattedRut);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Valida los datos con el esquema Yup importado
      await NaturalPersonSchema.validate(
        {
          namePerson: namePerson.trim(),
          lastNamePerson: lastNamePerson.trim(),
          rutPerson: rutPerson.trim(),
          personRole: selectedOptions.personRole,
          gender: selectedOptions.gender,
          country: selectedOptions.country,
        },
        { abortEarly: false }
      );
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      data.namePerson = data.namePerson.trim();
      data.lastNamePerson = data.lastNamePerson.trim();
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
      <div className="flex flex-col">
        <div className="flex flex-col items-center md:ml-6 md:space-x-4 md:flex-row md:justify-left">
          <div className="flex flex-col mt-6 md:mt-0">
            <label className="block ml-1">Rut de la persona Natural:</label>
            <input
              type="text"
              id="rutPerson"
              name="rutPerson"
              value={rutPerson}
              onChange={handleRutChange}
              onBlur={handleRutBlur}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.rutPerson ? "border-red-500" : ""
              }`}
              placeholder="Respuesta..."
            />
            {errors.rutPerson && (
              <span className="text-red-500">{errors.rutPerson}</span>
            )}
          </div>
          <div className="flex flex-col mt-6 md:mt-0">
            <label className="block ml-1">Nombre de la persona Natural:</label>
            <input
              type="text"
              id="namePerson"
              name="namePerson"
              value={namePerson}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.namePerson ? "border-red-500" : ""
              }`}
              placeholder="Respuesta..."
            />
            {errors.namePerson && (
              <span className="text-red-500">{errors.namePerson}</span>
            )}
          </div>
          <div className="flex flex-col mt-6 md:mt-0">
            <label className="block ml-1">
              Apellido de la persona Natural:
            </label>
            <input
              type="text"
              id="lastNamePerson"
              name="lastNamePerson"
              value={lastNamePerson}
              onChange={(e) => setLastNamePerson(e.target.value)}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.lastNamePerson ? "border-red-500" : ""
              }`}
              placeholder="Respuesta..."
            />
            {errors.lastNamePerson && (
              <span className="text-red-500">{errors.lastNamePerson}</span>
            )}
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
            label={
              info && Object.keys(info).length > 0
                ? info.typeNaturalPersonality
                : "Rol Persona Jurídica"
            }
            prop={"w-52 mt-6"}
            onChange={(option) => handleOptionChange("personRole", option)}
            value={selectedOptions.personRole}
            error={errors.personRole}
          />
          <Combobox
            data={gender}
            label={
              info && Object.keys(info).length > 0 ? info.genero : "Genero"
            }
            prop={"w-52 mt-6"}
            onChange={(option) => handleOptionChange("gender", option)}
            error={errors.gender}
          />
          <Combobox
            data={country}
            label={
              info && Object.keys(info).length > 0
                ? info.pais
                : "País de origen"
            }
            prop={"w-52 mt-6"}
            onChange={(option) => handleOptionChange("country", option)}
            value={selectedOptions.country}
            error={errors.country}
          />
        </div>
      </div>
    </form>
  );
};

export default NaturalPerson;
