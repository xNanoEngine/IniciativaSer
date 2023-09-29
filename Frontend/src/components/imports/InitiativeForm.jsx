import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
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
  const handleFormSubmit = (key, formData, val) => {
    setFormResults((prevResults) => ({ ...prevResults, [key]: formData }));
  };

  const handleSubmitAll = () => {
    // Verificar si TODOS los campos de TODOS los formularios están llenos

    const allFormFilled = accordions.every((accordion) => {
      return Object.values(formResults[accordion.key] || {}).some(
        (value) => value.trim() !== ""
      );
    });
    if (allFormFilled) {
      console.log(formResults);
      toast.success("Iniciativa enviada con éxito");

      setFormResults({});
    } else {
      toast.error("Llene cada formulario antes de enviar la iniciativa");
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
      <Toaster />
    </div>
  );
};

export default InitiativeForm;
