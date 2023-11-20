import React, { useState } from "react";
import { personRole, gender, country } from "../../../constants";
import { NaturalPersonSchema } from "../../validations/NaturalPersonValidation";
import Combobox from "../Combobox";

const NaturalPerson = ({ onSubmit, data }) => {
  console.log(data);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errors, setErrors] = useState({});
  const [rutPerson, setRut] = useState("");

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
    setRut(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Valida los datos con el esquema Yup importado
      await NaturalPersonSchema.validate(
        {
          namePerson: document.getElementById("namePerson").value.trim(),
          lastNamePerson: document
            .getElementById("lastNamePerson")
            .value.trim(),
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
            label={"Rol Persona Natural"}
            prop={"w-52 mt-6"}
            onChange={(option) => handleOptionChange("personRole", option)}
            error={errors.personRole}
          />
          <Combobox
            data={gender}
            label={"Genero"}
            prop={"w-52 mt-6"}
            onChange={(option) => handleOptionChange("gender", option)}
            error={errors.gender}
          />
          <Combobox
            data={country}
            label={"País de origen"}
            prop={"w-52 mt-6"}
            onChange={(option) => handleOptionChange("country", option)}
            error={errors.country}
          />
        </div>
      </div>
    </form>
  );
};

export default NaturalPerson;
