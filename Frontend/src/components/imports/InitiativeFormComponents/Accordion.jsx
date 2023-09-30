import React, { useState } from "react";
import { downWhite } from "../../../assets";
import { CheckIcon } from "../../Icons";
const Accordion = (props) => {
  const [isValid, setIsValid] = useState(false); // Nuevo estado para rastrear si el formulario es válido

  const handleToggleProperty = () => {
    // Actualiza el estado de isValid cuando se muestra/oculta la propiedad
    setIsValid(!isValid);
    props.toggleAccordion();
  };
  return (
    <div className="border rounded-md mb-1">
      <button className="initiativeButton" onClick={props.toggleAccordion}>
        <span className="mr-auto flex flex-row items-center">
          {props.title}{" "}
          <CheckIcon
            className={`h-8 w-8 ml-4 transition-all ${
              isValid
                ? "traslate-y-100 opacity-100 duration-300"
                : "traslate-y-0 opacity-0 overflow-hidden"
            }`}
          />
        </span>

        <span
          className={`float-right transform ${
            props.isOpen ? "rotate-180" : "rotate-0"
          } transition-transform duration-300`}
        >
          <img
            src={downWhite}
            alt="boton"
            className="w-10 h-10 object-contain ml-auto"
          />
        </span>
      </button>
      <div
        className={` transition-all duration-300 ease-in-out ${
          props.isOpen
            ? "max-h-screen opacity-100 initiativeContainer"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {React.cloneElement(props.data, {
          onSubmit: (formData, isValid) => {
            props.onSubmit(formData);
            setIsValid(isValid);
          },
        })}
      </div>
    </div>
  );
};

export default Accordion;
