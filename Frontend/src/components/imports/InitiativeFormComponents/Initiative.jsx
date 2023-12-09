import React, { useState, useEffect } from "react";
import {
  initiativeArea,
  initiativeComponent,
  initiativeConcurseLine,
  initiativeType,
  initiativeProgram,
  comuneFilters,
} from "../../../constants";
import { InitiativeSchema } from "../../validations/InitiativeValidation";
import Combobox from "../Combobox";

const Initiative = ({ onSubmit, info }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errors, setErrors] = useState({});
  const [initiativeName, setInitiativeName] = useState("");
  const [description, setDescription] = useState("");
  const [initDate, setInitDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const handleOptionChange = (key, option) => {
    setSelectedOptions((prevOptions) => ({ ...prevOptions, [key]: option }));
  };
  useEffect(() => {
    if (info && Object.keys(info).length > 0) {
      setInitiativeName(info.name || "");
      setDescription(info.description || "");
      const isValidInitDate =
        info.initDate && !isNaN(new Date(info.initDate).getTime());
      const isValidEndDate =
        info.endDate && !isNaN(new Date(info.endDate).getTime());
      setInitDate(
        isValidInitDate
          ? new Date(info.initDate).toISOString().split("T")[0]
          : ""
      );
      setEndDate(
        isValidEndDate ? new Date(info.endDate).toISOString().split("T")[0] : ""
      );

      setSelectedOptions({
        initiativeProgram: info.program || "",
        initiativeType: info.type || "",
        initiativeComponent: info.component || "",
        initiativeConcurseLine: info.concurseLine || "",
        initiativeArea: info.area || "",
        initiativeComune: info.comune || "",
      });
    }
  }, [info]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Valida los datos con el esquema Yup importado
      await InitiativeSchema.validate(
        {
          initiativeName: initiativeName.trim(),
          initiativeProgram: selectedOptions.initiativeProgram,
          initiativeType: selectedOptions.initiativeType,
          initiativeComponent: selectedOptions.initiativeComponent,
          initiativeConcurseLine: selectedOptions.initiativeConcurseLine,
          initiativeArea: selectedOptions.initiativeArea,
          initiativeComune: selectedOptions.initiativeComune,
          initiativeDescription: description.trim(),
          initiativeInitDate: initDate,
          initiativeEndDate: endDate,
        },
        { abortEarly: false }
      );
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      data.initiativeName = data.initiativeName.trim();
      data.initiativeDescription = data.initiativeDescription.trim();
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
            <label className="block ml-1">Nombre de la iniciativa:</label>
            <input
              type="text"
              id="initiativeName"
              name="initiativeName"
              value={initiativeName}
              onChange={(e) => setInitiativeName(e.target.value)}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.initiativeName ? "border-red-500" : ""
              }`}
              placeholder="Respuesta..."
            />
            {errors.initiativeName && (
              <span className="text-red-500">{errors.initiativeName}</span>
            )}
          </div>
          <Combobox
            data={initiativeProgram}
            label={
              info && Object.keys(info).length > 0 ? info.program : "Programa"
            }
            prop={"w-52 mt-6"}
            onChange={(option) =>
              handleOptionChange("initiativeProgram", option)
            }
            value={selectedOptions.initiativeProgram}
            error={errors.initiativeProgram}
          />
          <Combobox
            data={initiativeType}
            label={
              info && Object.keys(info).length > 0
                ? info.type
                : "Tipo de iniciativa"
            }
            prop={"w-52 mt-6"}
            onChange={(option) => handleOptionChange("initiativeType", option)}
            value={selectedOptions.initiativeType}
            error={errors.initiativeType}
          />
          <Combobox
            data={initiativeComponent}
            label={
              info && Object.keys(info).length > 0
                ? info.component
                : "Componente"
            }
            prop={"w-52 mt-6"}
            onChange={(option) =>
              handleOptionChange("initiativeComponent", option)
            }
            value={selectedOptions.initiativeComponent}
            error={errors.initiativeComponent}
          />
          <Combobox
            data={initiativeConcurseLine}
            label={
              info && Object.keys(info).length > 0
                ? info.concurseLine
                : "Línea concurso"
            }
            prop={"w-52 mt-6"}
            onChange={(option) =>
              handleOptionChange("initiativeConcurseLine", option)
            }
            value={selectedOptions.initiativeConcurseLine}
            error={errors.initiativeConcurseLine}
          />
          <Combobox
            data={initiativeArea}
            label={
              info && Object.keys(info).length > 0
                ? info.area
                : "Disciplina-Área"
            }
            prop={"w-52 mt-6"}
            onChange={(option) => handleOptionChange("initiativeArea", option)}
            value={selectedOptions.initiativeArea}
            error={errors.initiativeArea}
          />
        </div>
        <div className="flex flex-col items-center md:ml-6 md:space-x-4 md:flex-row md:justify-left">
          <Combobox
            data={comuneFilters}
            label={
              info && Object.keys(info).length > 0 ? info.comune : "Comuna"
            }
            prop={"w-32 mt-6"}
            onChange={(option) =>
              handleOptionChange("initiativeComune", option)
            }
            value={selectedOptions.comuneFilters}
            error={errors.initiativeComune}
          />
        </div>
        <div className="flex flex-col md:ml-6 md:justify-left">
          <label className="block ml-1">Descripcion de la iniciativa:</label>
          <textarea
            type="text"
            id="initiativeDescription"
            name="initiativeDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`w-3/4 h-44 px-4 py-2 rounded-md border resize-none${
              errors.initiativeDescription ? "border-red-500" : ""
            }`}
            placeholder="Respuesta..."
          />
          {errors.initiativeDescription && (
            <span className="text-red-500">{errors.initiativeDescription}</span>
          )}
        </div>
        <div className="flex flex-row justify-left space-x-4">
          <div className="flex flex-col md:ml-6 md:justify-left">
            <label className="block ml-1">Fecha de inicio:</label>
            <input
              type="date"
              name="initiativeInitDate"
              value={initDate}
              onChange={(e) => setInitDate(e.target.value)}
              className={`rounded-md p-2 border border-gray-300 ${
                errors.initiativeInitDate ? "border-red-500" : ""
              }`}
            />
            {errors.initiativeInitDate && (
              <span className="text-red-500">{errors.initiativeInitDate}</span>
            )}
          </div>
          <div className="flex flex-col md:ml-6 md:justify-left">
            <label className="block ml-1">Fecha de fin:</label>
            <input
              type="date"
              name="initiativeEndDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className={`rounded-md p-2 border border-gray-300 ${
                errors.initiativeEndDate ? "border-red-500" : ""
              }`}
            />
            {errors.initiativeEndDate && (
              <span className="text-red-500">{errors.initiativeEndDate}</span>
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

export default Initiative;
