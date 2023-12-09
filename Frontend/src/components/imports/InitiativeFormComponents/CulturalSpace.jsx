import React, { useState, useEffect } from "react";
import { culturalSpaceTypes } from "../../../constants";
import { CulturalSpaceSchema } from "../../validations/CulturalSpaceValidation";
import Combobox from "../Combobox";

const CulturalSpace = ({ onSubmit, info }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errors, setErrors] = useState({});
  const [culturalSpaceName, setCulturalSpaceName] = useState("");
  const [address, setAddress] = useState("");

  const handleOptionChange = (key, option) => {
    setSelectedOptions((prevOptions) => ({ ...prevOptions, [key]: option }));
  };
  useEffect(() => {
    if (info && Object.keys(info).length > 0) {
      setCulturalSpaceName(info.name || "");
      setAddress(info.address || "");
      setSelectedOptions({
        culturalSpaceTypes: info.type || "",
      });
    }
  }, [info]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Valida los datos con el esquema Yup importado
      await CulturalSpaceSchema.validate(
        {
          culturalSpaceName: culturalSpaceName.trim(),
          address: address.trim(),
          culturalSpaceTypes: selectedOptions.culturalSpaceTypes,
        },
        { abortEarly: false }
      );
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      data.culturalSpaceName = data.culturalSpaceName.trim();
      data.address = data.address.trim();
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
          <div className="flex flex-col mt-6 md:mt-0">
            <label className="block ml-1">Nombre del espacio Cultural:</label>
            <input
              type="text"
              id="culturalSpaceName"
              name="culturalSpaceName"
              value={culturalSpaceName}
              onChange={(e) => setCulturalSpaceName(e.target.value)}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.culturalSpaceName ? "border-red-500" : ""
              }`}
              placeholder="Respuesta..."
            />
            {errors.culturalSpaceName && (
              <span className="text-red-500">{errors.culturalSpaceName}</span>
            )}
          </div>
          <div className="flex flex-col mt-6 md:mt-0">
            <label className="block ml-1">Dirección:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={`w-72 px-4 py-2 rounded-md border ${
                errors.address ? "border-red-500" : ""
              }`}
              placeholder="Respuesta..."
            />
            {errors.address && (
              <span className="text-red-500">{errors.address}</span>
            )}
          </div>
          <Combobox
            data={culturalSpaceTypes}
            label={
              info && Object.keys(info).length > 0
                ? info.type
                : "Tipo de espacio cultural"
            }
            prop={"w-52 mt-6"}
            onChange={(option) =>
              handleOptionChange("culturalSpaceTypes", option)
            }
            value={selectedOptions.culturalSpaceTypes}
            error={errors.culturalSpaceTypes}
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

export default CulturalSpace;
