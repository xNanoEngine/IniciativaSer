import React from "react";
import { downWhite } from "../../../assets";
const Accordion = (props) => {
  return (
    <div className="border rounded-md mb-1">
      <button className="initiativeButton" onClick={props.toggleAccordion}>
        <span className="mr-auto">{props.title} </span>
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
        {React.cloneElement(props.data, { onSubmit: props.onSubmit })}
      </div>
    </div>
  );
};

export default Accordion;
