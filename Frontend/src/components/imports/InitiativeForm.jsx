import React from "react";
import {
  LegalPersonality,
  NaturalPerson,
  Initiative,
  CulturalSpace,
  TargetAudiences,
  Financing,
  Document,
} from "./InitiativeFormComponents";
const InitiativeForm = () => {
  return (
    <div className="p-4 mt-5 flex flex-col ">
      <LegalPersonality />
      <NaturalPerson />
      <Initiative />
      <CulturalSpace />
      <TargetAudiences />
      <Financing />
      <Document />
      <div className="mt-4 flex justify-center">
        <button className="boton">Enviar Iniciativa</button>
      </div>
    </div>
  );
};

export default InitiativeForm;
