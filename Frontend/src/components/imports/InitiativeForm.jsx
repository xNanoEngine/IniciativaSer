import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { titles } from "../../constants";
import clientAxios from "../config/clienteAxios";
import getConfigAuth from "../../utils/configToken";
import Accordion from "./InitiativeFormComponents/Accordion";

const InitiativeForm = () => {
  const [accordions, setAccordion] = useState(titles);
  const [formResults, setFormResults] = useState({});
  const [resetCounter, setResetCounter] = useState(0);
  const [info, setInfo] = useState({});
  const searchParams = new URLSearchParams(window.location.search);
  const query = searchParams.get("Edit");
  useEffect(() => {
    const handleGetInitiative = async (query) => {
      try {
        const config = getConfigAuth(localStorage.getItem("token"));
        const { data } = await clientAxios.get(`/iniciativas/${query}`, {
          params: {},
          ...config,
        });
        console.log(data.data[2]);
        const val = {
          legalPersonality: {
            typeLegalPersonality: data.data[0][0],
            nombre: data.data[0][1],
            rut: data.data[0][2],
            juridicPersonRole: data.data[0][3],
          },
          naturalPerson: {
            rut: data.data[1][0],
            nombre: data.data[1][1],
            apellido: data.data[1][2],
            typeNaturalPersonality: data.data[1][3],
            genero: data.data[1][4],
            pais: data.data[1][5],
          },
          initiative: {
            name: data.data[2][0],
            program: data.data[2][1],
            type: data.data[2][2],
            component: data.data[2][3],
            concurseLine: data.data[2][4],
            area: data.data[2][5],
            comune: data.data[2][6],
            description: data.data[2][7],
            initDate: data.data[2][8],
            endDate: data.data[2][9],
          },
          culturalSpace: {
            name: data.data[3][0],
            address: data.data[3][1],
            type: data.data[3][2],
          },
          targetAudiences: {
            type: data.data[5][0],
            amount: data.data[5][1],
          },
          financing: {
            type: data.data[6][0],
            budget: data.data[6][1],
          },
          document: {
            name: data.data[7][0],
            date: data.data[7][1],
            author: data.data[7][2],
            type: data.data[7][3],
            institution: data.data[7][4],
            key: data.data[7][5],
            url: data.data[7][6],
          },
        };
        setInfo(val);
      } catch (error) {
        console.log(error);
      }
    };

    if (query) {
      handleGetInitiative(query);
    }
  }, [query]);

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
  const handleUpdateAll = () => {
    // Verificar si TODOS los campos de TODOS los formularios están llenos
    const allFormFilled = accordions.every((accordion) => {
      return Object.values(formResults[accordion.key] || {}).some(
        (value) => value.trim() !== ""
      );
    });
    if (allFormFilled) {
      handleUpdate();
      toast.success("Iniciativa actualizada con éxito");
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
      Iniciativa_lineaConcurso:
        formResults[3].selectedOptions.initiativeConcurseLine,
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
    console.log(formData);
    try {
      const { data } = await clientAxios.post(`/iniciativas`, formData, config);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (e) => {
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
      Iniciativa_id: query,
      Iniciativa_tipo: formResults[3].selectedOptions.initiativeType,
      Iniciativa_descripcion: formResults[3].initiativeDescription,
      Iniciativa_componente: formResults[3].selectedOptions.initiativeComponent,
      Iniciativa_lineaConcurso:
        formResults[3].selectedOptions.initiativeConcurseLine,
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
      const { data } = await clientAxios.put(
        `/iniciativas/${query}`,
        formData,
        config
      );
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
          formInfo={query ? info[accordion.code] : {}}
          code={accordion.code}
          toggleAccordion={() => toggleAccordion(accordion.key)}
          onSubmit={(formData) => handleFormSubmit(accordion.key, formData)}
        />
      ))}

      <div className="mt-4 flex justify-center">
        {query ? (
          <button type="button" className="boton" onClick={handleUpdateAll}>
            Actualizar Iniciativa
          </button>
        ) : (
          <button type="button" className="boton" onClick={handleSubmitAll}>
            Enviar
          </button>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default InitiativeForm;
