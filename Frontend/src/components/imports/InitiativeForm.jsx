import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { titles } from "../../constants";
import clientAxios from "../config/clienteAxios";
import getConfigAuth from "../../utils/configToken";
import Accordion from "./InitiativeFormComponents/Accordion";

const InitiativeForm = () => {
  const [accordions, setAccordion] = useState(titles);
  const [formResults, setFormResults] = useState({});
  const [resetCounter, setResetCounter] = useState(0);
  const searchParams = new URLSearchParams(window.location.search);
  const query = searchParams.get("Edit");
  let data = {};
  if (query) {
    data = {
      legalPersonality: {
        typeLegalPersonality: "Institución pública",
        nombre: "Juan Pérez",
        rut: "20493021k",
        juridicPersonRole: "Ejecutor",
      },
      naturalPerson: {
        typeNaturalPersonality: "Persona natural",
        nombre: "María García",
        rut: "12345678-9",
      },
      initiative: {
        name: "Initiación",
      },
      culturalSpace: {
        name: "Cultural Space",
      },
      targetAudiences: {
        name: "Target",
      },
      financing: {
        name: "Budget",
      },
      document: {
        name: "Document",
      },
    };
  }

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
    // Verificar si TODOS los campos de TODOS los formularios están llenos
    const allFormFilled = accordions.every((accordion) => {
      return Object.values(formResults[accordion.key] || {}).some(
        (value) => value.trim() !== ""
      );
    });
    if (allFormFilled) {
      handleSubmit();
      toast.success("Iniciativa enviada con éxito");
      setFormResults({});
      setResetCounter(resetCounter + 1);
    } else {
      toast.error("Llene cada formulario antes de enviar la iniciativa");
    }
  };

  const handleSubmit = async (e) => {
    const config = getConfigAuth(localStorage.getItem("token"));
    const formData = {
      PersonaJuridica_nombre: formResults[1].name,
      PersonaJuridica_rut: formResults[1].rut,
      PersonaJuridica_tipo: formResults[1].selectedOptions.typeLegalPersonality,
      PersonaJuridica_rol: formResults[1].selectedOptions.juridicPersonRole,
      PersonaNatural_rut: formResults[2].rutPerson,
      PersonaNatural_nombre: formResults[2].namePerson,
      PersonaNatural_apellido: formResults[2].lastNamePerson,
      PersonaNatural_genero: formResults[2].selectedOptions.gender,
      PersonaNatural_pais_origen: formResults[2].selectedOptions.country,
      PersonaNatural_rol: formResults[2].selectedOptions.personRole,
      Iniciativa_nombre: formResults[3].initiativeName,
      Comuna_nombre: formResults[3].selectedOptions.initiativeComune,
      Programa_nombre: formResults[3].selectedOptions.initiativeProgram,
      Iniciativa_tipo: formResults[3].selectedOptions.initiativeType,
      Iniciativa_descripcion: formResults[3].initiativeDescription,
      Iniciativa_componente: formResults[3].selectedOptions.initiativeComponent,
      Iniciativa_fechaInicio: formResults[3].initiativeInitDate,
      Iniciativa_fechaFin: formResults[3].initiativeEndDate,
      Iniciativa_presupuesto: formResults[6].budget,
      Iniciativa_formaFinanciamiento: formResults[6].selectedOptions.financing,
      Iniciativa_tipoPublicoObjetivo: formResults[5].selectedOptions.targetType,
      Iniciativa_cantPublico: formResults[5].targetAmount,
      AmbitoDominioArea_nombre: formResults[3].selectedOptions.initiativeArea,
      EspacioCultural_nombre: formResults[4].culturalSpaceName,
      EspacioCultural_direccion: formResults[4].address,
      TipoEspacioCultural_tipo:
        formResults[4].selectedOptions.culturalSpaceTypes,
      Documento_titulo: formResults[7].documentName,
      Documento_autor: formResults[7].documentAuthor,
      Documento_fecha_publicacion: formResults[7].documentDate,
      Documento_enlace: formResults[7].documentUrl,
      Documento_materia: formResults[7].keyWords,
      Documento_fuente: formResults[7].institutionName,
      Documento_tipo: formResults[7].selectedOptions.documentType,
    };
    try {
      const { data } = await clientAxios.post(`/iniciativas`, formData, config);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4 mt-5 flex flex-col select-none">
      {accordions.map((accordion) => (
        <Accordion
          key={`${accordion.key}-${resetCounter}`}
          title={accordion.title}
          data={accordion.data}
          isOpen={accordion.isOpen}
          formInfo={data ? data[accordion.code] : {}}
          code={accordion.code}
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
