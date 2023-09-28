import React, { useState } from "react";
import { titles } from "../../constants";
import Accordion from "./InitiativeFormComponents/Accordion";

const InitiativeForm = () => {
  const [accordions, setAccordion] = useState(titles);
  const [formResults, setFormResults] = useState({});

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };
  const handleFormSubmit = (key, formData) => {
    setFormResults((prevResults) => ({ ...prevResults, [key]: formData }));
  };

  const handleSubmitAll = () => {
    // Verificar si al menos un campo de algún formulario está lleno
    const anyFormFilled = accordions.some((accordion) => {
      return Object.values(formResults[accordion.key] || {}).some(
        (value) => value.trim() !== ""
      );
    });

    if (anyFormFilled) {
      // Al menos un formulario tiene campos llenos, puedes proceder con el envío de la iniciativa
      console.log(formResults);
    } else {
      // Ningún formulario tiene campos llenos
      alert(
        "Llene al menos un campo en uno de los formularios antes de enviar la iniciativa."
      );
    }
  };

  return (
    <div className="p-4 mt-5 flex flex-col select-none">
      {accordions.map((accordion) => (
        <Accordion
          key={accordion.key}
          title={accordion.title}
          data={accordion.data}
          isOpen={accordion.isOpen}
          toggleAccordion={() => toggleAccordion(accordion.key)}
          onSubmit={(formData) => handleFormSubmit(accordion.key, formData)}
        />
      ))}
      <div className="mt-4 flex justify-center">
        <button onClick={handleSubmitAll} className="boton">
          Enviar Iniciativa
        </button>
      </div>
    </div>
  );
};

export default InitiativeForm;
