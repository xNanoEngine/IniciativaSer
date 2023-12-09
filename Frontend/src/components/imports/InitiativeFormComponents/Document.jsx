import React, { useState, useEffect } from "react";
import { documentType } from "../../../constants";
import { DocumentSchema } from "../../validations/DocumentValidation";
import Combobox from "../Combobox";

const Document = ({ onSubmit, info }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errors, setErrors] = useState({});
  const [documentName, setDocumentName] = useState("");
  const [documentAuthor, setDocumentAuthor] = useState("");
  const [documentDate, setDocumentDate] = useState("");
  const [documentInstitution, setDocumentInstitution] = useState("");
  const [documentKeyWords, setDocumentKeyWords] = useState("");
  const [documentUrl, setDocumentUrl] = useState("");

  const handleOptionChange = (key, option) => {
    setSelectedOptions((prevOptions) => ({ ...prevOptions, [key]: option }));
  };

  useEffect(() => {
    if (info) {
      setDocumentName(info.name || "");
      setDocumentAuthor(info.author || "");
      setDocumentDate(new Date(info.date).toISOString().split("T")[0] || "");
      setDocumentInstitution(info.institution || "");
      setDocumentKeyWords(info.key || "");
      setDocumentUrl(info.url || "");
      setSelectedOptions({
        documentType: info.type || "",
      });
    }
  }, [info]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Valida los datos con el esquema Yup importado
      await DocumentSchema.validate(
        {
          documentName: documentName.trim(),
          documentAuthor: documentAuthor.trim(),
          documentDate: documentDate,
          documentType: selectedOptions.documentType,
          institutionName: documentInstitution.trim(),
          keyWords: documentKeyWords.trim(),
          documentUrl: documentUrl.trim(),
        },
        { abortEarly: false }
      );
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      data.documentName = data.documentName;
      data.documentAuthor = data.documentAuthor;
      data.institutionName = data.institutionName;
      data.keyWords = data.keyWords;
      data.documentUrl = data.documentUrl;
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
              value={documentName}
              onChange={(e) => setDocumentName(e.target.value)}
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
              value={documentDate}
              onChange={(e) => setDocumentDate(e.target.value)}
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
              value={documentAuthor}
              onChange={(e) => setDocumentAuthor(e.target.value)}
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
            label={info ? info.type : "Tipo de documento"}
            prop={"w-52 mt-6"}
            onChange={(option) => handleOptionChange("documentType", option)}
            value={selectedOptions.documentType}
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
              value={documentInstitution}
              onChange={(e) => setDocumentInstitution(e.target.value)}
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
              value={documentKeyWords}
              onChange={(e) => setDocumentKeyWords(e.target.value)}
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
              value={documentUrl}
              onChange={(e) => setDocumentUrl(e.target.value)}
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
