import React, { useState } from "react";
import { documentType } from "../../../constants";
import { DocumentSchema } from "../../validations/DocumentValidation";
import Combobox from "../Combobox";

const Document = ({ onSubmit }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errors, setErrors] = useState({});
  const handleOptionChange = (key, option) => {
    setSelectedOptions((prevOptions) => ({ ...prevOptions, [key]: option }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Valida los datos con el esquema Yup importado
      await DocumentSchema.validate(
        {
          documentName: document.getElementById("documentName").value.trim(),
          documentAuthor: document
            .getElementById("documentAuthor")
            .value.trim(),
          documentDate: document.getElementsByName("documentDate")[0].value,
          documentType: selectedOptions.documentType,
          institutionName: document
            .getElementById("institutionName")
            .value.trim(),
          keyWords: document.getElementById("keyWords").value.trim(),
          documentUrl: document.getElementById("documentUrl").value.trim(),
        },
        { abortEarly: false }
      );
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      data.documentName = data.documentName.trim();
      data.documentAuthor = data.documentAuthor.trim();
      data.institutionName = data.institutionName.trim();
      data.keyWords = data.keyWords.trim();
      data.documentUrl = data.documentUrl.trim();
      data.selectedOptions = selectedOptions;
      onSubmit(data, true);
      setErrors({});
    } catch (validationErrors) {
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
            <label className="block ml-1">
              Titulo del documento (producto digital):
            </label>
            <input
              type="text"
              id="documentName"
              name="documentName"
              className={`w-full px-4 py-2 rounded-md border ${
                errors.documentName ? "border-red-500" : ""
              }`}
              placeholder="Respuesta..."
            />
            {errors.documentName && (
              <span className="text-red-500">{errors.documentName}</span>
            )}
          </div>
          <div className="flex flex-col md:ml-6 md:justify-left">
            <label className="block ml-1">
              Fecha de publicación del documento:
            </label>
            <input
              type="date"
              name="documentDate"
              className={`rounded-md p-2 border border-gray-300 ${
                errors.documentDate ? "border-red-500" : ""
              }`}
            />
            {errors.documentDate && (
              <span className="text-red-500">{errors.documentDate}</span>
            )}
          </div>
          <div className="flex flex-col mt-6 md:mt-0">
            <label className="block ml-1">Autor:</label>
            <input
              type="text"
              id="documentAuthor"
              name="documentAuthor"
              className={`w-full px-4 py-2 rounded-md border ${
                errors.documentAuthor ? "border-red-500" : ""
              }`}
              placeholder="Respuesta..."
            />
            {errors.documentAuthor && (
              <span className="text-red-500">{errors.documentAuthor}</span>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center md:ml-6 md:space-x-4 md:flex-row md:justify-left">
          <Combobox
            data={documentType}
            label={"Tipo de documento"}
            prop={"w-52 mt-6"}
            onChange={(option) => handleOptionChange("documentType", option)}
            error={errors.documentType}
          />
          <div className="flex flex-col mt-6 md:mt-0">
            <label className="block ml-1">
              Fuente (Nombre de la institución donde se publica el documento):
            </label>
            <input
              type="text"
              id="institutionName"
              name="institutionName"
              className={`w-full px-4 py-2 rounded-md border ${
                errors.institutionName ? "border-red-500" : ""
              }`}
              placeholder="Respuesta..."
            />
            {errors.institutionName && (
              <span className="text-red-500">{errors.institutionName}</span>
            )}
          </div>
          <div className="flex flex-col mt-6 md:mt-0">
            <label className="block ml-1">Palabras claves:</label>
            <input
              type="text"
              id="keyWords"
              name="keyWords"
              className={`w-full px-4 py-2 rounded-md border ${
                errors.keyWords ? "border-red-500" : ""
              }`}
              placeholder="Respuesta..."
            />
            {errors.keyWords && (
              <span className="text-red-500">{errors.keyWords}</span>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center md:ml-6 md:space-x-4 md:flex-row md:justify-left">
          <div className="flex flex-col mt-6 md:mt-0">
            <label className="block ml-1">Enlace del documento (URL):</label>
            <input
              type="text"
              id="documentUrl"
              name="documentUrl"
              className={`w-80 px-4 py-2 rounded-md border ${
                errors.documentUrl ? "border-red-500" : ""
              }`}
              placeholder="Respuesta..."
            />
            {errors.documentUrl && (
              <span className="text-red-500">{errors.documentUrl}</span>
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

export default Document;
