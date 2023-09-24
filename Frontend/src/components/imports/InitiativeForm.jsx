import React, { useState } from "react";
import { titles } from "../../constants";
import Accordion from "./InitiativeFormComponents/Accordion";

const InitiativeForm = () => {
  const [accordions, setAccordion] = useState(titles);
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
  return (
    <div className="p-4 mt-5 flex flex-col select-none">
      {accordions.map((accordion) => (
        <Accordion
          key={accordion.key}
          title={accordion.title}
          data={accordion.data}
          isOpen={accordion.isOpen}
          toggleAccordion={() => toggleAccordion(accordion.key)}
        />
      ))}
      <div className="mt-4 flex justify-center">
        <button className="boton">Enviar Iniciativa</button>
      </div>
    </div>
  );
};

export default InitiativeForm;
