import jwt from "jsonwebtoken";
import { Op } from "sequelize";
//import sequelize from "sequelize";
import { sequelize } from "../database/database.js";
import { QueryTypes } from "sequelize";
import { Cuentas } from "../models/Cuentas.js";
import { Iniciativa } from "../models/Iniciativa.js";
import { Programa } from "../models/Programa.js";
import { Comuna } from "../models/Comuna.js";
import { Documento } from "../models/Documento.js";
import { ambitodominioarea } from "../models/ambitodominioarea.js";
import { programa_iniciativa } from "../models/programa_iniciativa.js";
import { iniciativa_comuna } from "../models/iniciativa_comuna.js";

import { createDocumento_ } from "./documentos.repository.js";
import { createEspacioCultural_ } from "./espaciocultural.repository.js";
import { createLocalidadterritorio_ } from "./localidadterritorio.repository.js";
import { createObjetivo_ } from "./objetivo.repository.js";
import { createPersonajuridica_ } from "./personasjuridicas.repository.js";
import { createPersonanatural_ } from "./personanaturals.repository.js";
import { createTipoespaciocultural_ } from "./tipoespaciocultural.repository.js";
import { PersonaJuridica } from "../models/PersonaJuridica.js";
import { PersonaNatural } from "../models/PersonaNatural.js";

export async function createInitiative(body) {
  const {
    Iniciativa_id,
    Iniciativa_idInterno,
    Iniciativa_nombre,
    Iniciativa_tipo,
    Iniciativa_descripcion,
    Iniciativa_componente,
    Iniciativa_presupuesto,
    Iniciativa_formaFinanciamiento,
    Iniciativa_lineaConcurso,
    Iniciativa_tipoPublicoObjetivo,
    Iniciativa_cantPublico,
    Iniciativa_fechaInicio,
    Iniciativa_fechaFin,
    Comuna_id,
    Comuna_nombre,
    Comuna_cantHabitantes,
    AmbitoDominioArea_nombre,
    Documento_id,
    Documento_titulo,
    Documento_fecha_publicacion,
    Documento_enlace,
    Documento_materia,
    Documento_fuente,
    Documento_tipo,
    Documento_autor,
    EspacioCultural_id,
    EspacioCultural_nombre,
    EspacioCultural_direccion,
    EspacioCultural_correo,
    EspacioCultural_telefono,
    LocalidadTerritorio_id,
    LocalidadTerritorio_nombre,
    LocalidadTerritorio_tipo,
    Objetivo_id,
    Objetivo_nombre_objetivo,
    Objetivo_numero,
    Objetivo_nivel,
    PersonaJuridica_id,
    PersonaJuridica_nombre,
    PersonaJuridica_rut,
    PersonaJuridica_tipo,
    PersonaJuridica_url,
    PersonaJuridica_telefono,
    PersonaJuridica_IG,
    PersonaJuridica_correo,
    PersonaJuridica_rol,
    PersonaNatural_id,
    PersonaNatural_rut,
    PersonaNatural_ig,
    PersonaNatural_sitio_web,
    PersonaNatural_nombre,
    PersonaNatural_correo,
    PersonaNatural_telefono,
    PersonaNatural_apellido,
    PersonaNatural_genero,
    PersonaNatural_pais_origen,
    PersonaNatural_rol,
    PersonaNatural_pueblo_originario,
    Programa_id,
    Programa_nombre,
    Programa_descripcion,
    Programa_url,
    TipoEspacioCultural_tipo,
    userRol,
    userId,
  } = body;
  console.log(userRol);
  const cuentaId = userId;

  const Iniciativa_ = {
    id: Iniciativa_id,
    idInterno: Iniciativa_idInterno,
    nombre: Iniciativa_nombre,
    tipo: Iniciativa_tipo,
    descripcion: Iniciativa_descripcion,
    componente: Iniciativa_componente,
    presupuesto: Iniciativa_presupuesto,
    lineaconcurso: Iniciativa_lineaConcurso,
    formaFinanciamiento: Iniciativa_formaFinanciamiento,
    tipoPublicoObjetivo: Iniciativa_tipoPublicoObjetivo,
    cantPublico: Iniciativa_cantPublico,
    fechaInicio: Iniciativa_fechaInicio,
    fechaFin: Iniciativa_fechaFin,
    flag: true,
  };

  const documento_ = {
    id: Documento_id,
    titulo: Documento_titulo,
    fecha_publicacion: Documento_fecha_publicacion,
    enlace: Documento_enlace,
    materia: Documento_materia,
    fuente: Documento_fuente,
    tipo: Documento_tipo,
    autor: Documento_autor,
  };

  const espacio_cultural_ = {
    id: EspacioCultural_id,
    nombre: EspacioCultural_nombre,
    direccion: EspacioCultural_direccion,
    correo: EspacioCultural_correo,
    telefono: EspacioCultural_telefono,
  };

  const localidad_territorio_ = {
    id: LocalidadTerritorio_id,
    nombre: LocalidadTerritorio_nombre,
    tipo: LocalidadTerritorio_tipo,
  };

  const objetivo_ = {
    id: Objetivo_id,
    nombre_objetivo: Objetivo_nombre_objetivo,
    numero: Objetivo_numero,
    nivel: Objetivo_nivel,
  };

  const persona_juridica_ = {
    id: PersonaJuridica_id,
    nombre: PersonaJuridica_nombre,
    rut: PersonaJuridica_rut,
    tipo: PersonaJuridica_tipo,
    url: PersonaJuridica_url,
    telefono: PersonaJuridica_telefono,
    IG: PersonaJuridica_IG,
    correo: PersonaJuridica_correo,
  };

  const personanatural_ = {
    id: PersonaNatural_id,
    rut: PersonaNatural_rut,
    ig: PersonaNatural_ig,
    sitio_web: PersonaNatural_sitio_web,
    nombre: PersonaNatural_nombre,
    correo: PersonaNatural_correo,
    telefono: PersonaNatural_telefono,
    apellido: PersonaNatural_apellido,
    genero: PersonaNatural_genero,
    pais_origen: PersonaNatural_pais_origen,
    pueblo_originario: PersonaNatural_pueblo_originario,
  };

  const tipoespaciocultural_ = {
    tipo: TipoEspacioCultural_tipo,
  };

  const cuenta = await Cuentas.findOne({ where: { id: cuentaId } });
  console.log(Iniciativa_);

  try {
    const iniciativa = await createIniciativa_(Iniciativa_);
    const comuna = await Comuna.findOne({ where: { nombre: Comuna_nombre } });
    const documento = await createDocumento_(documento_);
    const espacio_cultural = await createEspacioCultural_(espacio_cultural_);
    const localidad_territorio = await createLocalidadterritorio_(
      localidad_territorio_
    );
    const objetivo = await createObjetivo_(objetivo_);
    const persona_juridica = await createPersonajuridica_(persona_juridica_);
    const persona_natural = await createPersonanatural_(personanatural_);
    const programa = await Programa.findOne({
      where: { nombre: Programa_nombre },
    });
    const tipo_espacio_cultural = await createTipoespaciocultural_(
      tipoespaciocultural_
    );
    const ambito_dominio_area = await ambitodominioarea.findOne({
      where: { nombre: AmbitoDominioArea_nombre },
    });

    // 1 x n
    await iniciativa.addDocumento(documento);
    await persona_juridica.addPrograma(programa);
    await comuna.addEspacio_cultural(espacio_cultural);
    await comuna.addLocalidad_territorio(localidad_territorio);
    await comuna.addPersona_juridica(persona_juridica);
    await comuna.addPersonanatural(persona_natural);
    await cuenta.addIniciativas(iniciativa);
    // n x m
    await persona_natural.addDocumento(documento);
    await comuna.addDocumento(documento);
    await persona_juridica.addEspacio_cultural(espacio_cultural);
    await tipo_espacio_cultural.addEspacio_cultural(espacio_cultural);
    await iniciativa.addComuna(comuna);
    await persona_natural.addIniciativa(iniciativa, {
      through: { rol_persona_natural: PersonaNatural_rol },
    });
    await localidad_territorio.addIniciativa(iniciativa);
    await objetivo.addIniciativa(iniciativa);
    await persona_juridica.addIniciativa(iniciativa, {
      through: { rol_persona_juridica: PersonaJuridica_rol },
    });
    await programa.addIniciativa(iniciativa);
    await ambito_dominio_area.addIniciativa(iniciativa);
    await ambito_dominio_area.addPersonanatural(persona_natural);
    await ambito_dominio_area.addDocumento(documento);
    await ambito_dominio_area.addPersona_juridica(persona_juridica);
    //console.log(Object.keys(iniciativa.__proto__));
    console.log("TERMINO");
    return { status: true };
  } catch (error) {
    return { status: false, error: error.message };
  }
}

async function createIniciativa_(iniciativa) {
  const {
    id,
    idInterno,
    nombre,
    tipo,
    descripcion,
    componente,
    presupuesto,
    lineaconcurso,
    formaFinanciamiento,
    tipoPublicoObjetivo,
    cantPublico,
    fechaInicio,
    fechaFin,
  } = iniciativa;
  try {
    const newIniciativa = await Iniciativa.create({
      id,
      idInterno,
      nombre,
      tipo,
      descripcion,
      componente,
      presupuesto,
      lineaconcurso,
      formaFinanciamiento,
      tipoPublicoObjetivo,
      cantPublico,
      fechaInicio,
      fechaFin,
    });
    return newIniciativa;
  } catch (error) {
    console.error("Error al insertar Iniciativa:", error);
    throw new Error("Sucedio un error......");
  }
}

export async function getIniciativas_(Body) {
  const { Filtro_Iniciativa, Filtro_Comuna, Busqueda, Page, PerPage, token } =
    Body;
  const limit = parseInt(PerPage, 10);
  const page = parseInt(Page, 10);
  const offset = (page - 1) * limit;
  const whereConditions = {}; // Objeto de condiciones

  const Options = {
    limit: limit,
    offset: offset,
    subQuery: false,
    nest: true, //
  };

  if (Filtro_Comuna) {
    const comunasfiltro = Filtro_Comuna.split(",");
    Options.include = [
      {
        model: Comuna,
        attributes: ["nombre"],
        as: "comunas",
        where: {
          nombre: {
            [Op.or]: comunasfiltro.map((nombre) => ({
              [Op.like]: nombre,
            })),
          },
        },
      },
      {
        model: Programa,
        as: "programas",
        attributes: ["nombre"],
      },
      {
        model: Documento,
        as: "documentos",
        attributes: ["titulo", "enlace"],
      },
    ];
  } else {
    Options.include = [
      {
        model: Comuna,
        attributes: ["nombre"],
        as: "comunas",
      },
      {
        model: Programa,
        as: "programas",
        attributes: ["nombre"],
      },
      {
        model: Documento,
        as: "documentos",
        attributes: ["titulo", "enlace"],
      },
    ];
  }

  if (Filtro_Iniciativa) {
    if (Filtro_Iniciativa === "Nombre") {
      whereConditions.nombre = {
        [Op.like]: `%${Busqueda}%`,
      };
      Options.where = whereConditions;
    } else if (Filtro_Iniciativa === "Programa") {
      Options.include[1] = {
        model: Programa,
        as: "programas",
        attributes: ["nombre"],
        where: {
          nombre: { [Op.like]: `%${Busqueda}%` },
        },
      };
    } else if (Filtro_Iniciativa === "Descripcion") {
      whereConditions.descripcion = {
        [Op.like]: `%${Busqueda}%`,
      };
      Options.where = whereConditions;
    } else if (Filtro_Iniciativa === "Componente") {
      whereConditions.componente = {
        [Op.like]: `%${Busqueda}%`,
      };
      Options.where = whereConditions;
    } else if (Filtro_Iniciativa === "Financiamiento") {
      whereConditions.formaFinanciamiento = {
        [Op.like]: `%${Busqueda}%`,
      };

      Options.where = whereConditions;
    }
    whereConditions.flag = true;
  } else {
    //Busqueda global, (Cuando no hay filtros de iniciativa, ventana home)
    // falta añadir busqueda global por programas
    Options.where = {
      [Op.or]: [
        { nombre: { [Op.like]: `%${Busqueda}%` } },
        { descripcion: { [Op.like]: `%${Busqueda}%` } },
        { componente: { [Op.like]: `%${Busqueda}%` } },
        { formaFinanciamiento: { [Op.like]: `%${Busqueda}%` } },
        { "$programas.nombre$": { [Op.like]: `%${Busqueda}%` } },
      ],
      flag: true,
    };
  }
  if (token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const cuentaId = parseInt(decoded.userId, 10);

    try {
      const { count, rows } = await Iniciativa.findAndCountAll(Options);
      // Iterar a través de las iniciativas y establecer el campo canEdit
      const iniciativasConCanEdit = rows.map((iniciativa) => ({
        ...iniciativa.dataValues,
        canEdit: iniciativa.cuentaId === cuentaId,
      }));
      console.log(iniciativasConCanEdit);
      const totalPages = Math.ceil(count / PerPage);
      return {
        counts: count,
        results: iniciativasConCanEdit, // Enviar las iniciativas con el campo canEdit
        totalPages: totalPages,
        accountId: cuentaId,
      };
      // res.status(200).json({
      //   counts: count,
      //   results: iniciativasConCanEdit, // Enviar las iniciativas con el campo canEdit
      //   totalPages: totalPages,
      //   accountId: cuentaId,
      // });
    } catch (error) {
      console.log(error);
      return { message: "Error al obtener las iniciativas." };
    }
  } else {
    // Si no se proporciona un token, simplemente envía las iniciativas sin el campo canEdit
    try {
      const { count, rows } = await Iniciativa.findAndCountAll(Options);
      const totalPages = Math.ceil(count / PerPage);
      return {
        counts: count,
        results: rows,
        totalPages: totalPages,
      };
      // res.status(200).json({
      //   counts: count,
      //   results: rows,
      //   totalPages: totalPages,
      // });
    } catch (error) {
      console.log(error);
      return { message: "Error al obtener las iniciativas." };
    }
  }
}

export async function updateIniciativa_(iniciativa) {
  const {
    id,
    idInterno,
    nombre,
    tipo,
    descripcion,
    componente,
    presupuesto,
    formaFinanciamiento,
    tipoPublicoObjetivo,
    cantPublico,
    fechaInicio,
    fechaFin,
  } = iniciativa;
  try {
    const iniciativa_update = await Iniciativa.findByPk(id);
    console.log(iniciativa_update);
    iniciativa_update.idInterno = idInterno;
    iniciativa_update.nombre = nombre;
    iniciativa_update.tipo = tipo;
    iniciativa_update.descripcion = descripcion;
    iniciativa_update.componente = componente;
    iniciativa_update.presupuesto = presupuesto;
    iniciativa_update.formaFinanciamiento = formaFinanciamiento;
    iniciativa_update.tipoPublicoObjetivo = tipoPublicoObjetivo;
    iniciativa_update.cantPublico = cantPublico;
    iniciativa_update.fechaInicio = fechaInicio;
    iniciativa_update.fechaFin = fechaFin;
    await iniciativa_update.save();
    return "se modifico correctamente";
  } catch (error) {
    console.log(error);
    throw new Error("Sucedio un error......");
  }
}

export async function deleteIniciativa_(id) {
  // Hace un borrado logico a la iniciativa seleccionada
  try {
    console.log(id);
    const iniciativa_update = await Iniciativa.findByPk(id);
    console.log(iniciativa_update);
    iniciativa_update.flag = false; // Cambia el atributo FLAG de la iniciativa a falso, borrandolo de las busquedas
    await iniciativa_update.save();
    return "se elimino correctamente";
  } catch (error) {
    throw new Error("Sucedio un error......");
  }
}

export async function getIniciativa_(id) {
  try {
    console.log("getIniciativa");
    const iniciativa = await Iniciativa.findOne({
      where: { id },
      include: [
        {
          model: PersonaJuridica,
          required: true,
        },
        {
          model: PersonaNatural,
          required: true,
        },
        {
          model: Programa,
          as: "programas",
          attributes: ["nombre"],
        },
        {
          model: Comuna,
          attributes: ["nombre"],
          as: "comunas",
        },
        {
          model: Documento,
          as: "documentos",
        },
        {
          model: ambitodominioarea,
          required: true,
        },
      ],
    });

    const results = await sequelize.query(
      "SELECT personaJuridicaId FROM personajuridica_iniciativa WHERE iniciativaId = ?",
      {
        replacements: [id],
        type: QueryTypes.SELECT,
      }
    );
    const personajuridicaidq = results[0].personaJuridicaId;
    const results2 = await sequelize.query(
      "SELECT espacioCulturalId FROM espaciocultural_personajuridica WHERE personaJuridicaId = ?",
      {
        replacements: [personajuridicaidq],
        type: QueryTypes.SELECT,
      }
    );
    const espacio_culturalidq = results2[0].espacioCulturalId;
    const results3 = await sequelize.query(
      "SELECT nombre, direccion, comunaId FROM espacio_cultural WHERE id = ?",
      {
        replacements: [espacio_culturalidq],
        type: QueryTypes.SELECT,
      }
    );
    const results4 = await sequelize.query(
      "SELECT tipoespacioculturalId FROM espaciocultural_tipoespaciocultural WHERE espacioCulturalId = ?",
      {
        replacements: [espacio_culturalidq],
        type: QueryTypes.SELECT,
      }
    );
    const tipoespacioculturalq = results4[0].tipoespacioculturalId;
    const results5 = await sequelize.query(
      "SELECT tipo from tipoespaciocultural WHERE id = ?",
      {
        replacements: [tipoespacioculturalq],
        type: QueryTypes.SELECT,
      }
    );
    //console.log(iniciativa.persona_juridicas[0].dataValues.personajuridica_iniciativa.dataValues.rol_persona_juridica);
    let Personalidad_Juridica = [];
    let Persona_Natural = [];
    let Iniciativa_Row = [];
    let Espacio_Cultural = [];
    let Publico_Objetivo = [];
    let Financiamiento = [];
    let Documento_ = [];
    Personalidad_Juridica[0] = iniciativa.persona_juridicas[0].dataValues.tipo;
    Personalidad_Juridica[1] =
      iniciativa.persona_juridicas[0].dataValues.nombre;
    Personalidad_Juridica[2] = iniciativa.persona_juridicas[0].dataValues.rut;
    Personalidad_Juridica[3] =
      iniciativa.persona_juridicas[0].dataValues.personajuridica_iniciativa.dataValues.rol_persona_juridica;
    Persona_Natural[0] = iniciativa.personanaturals[0].dataValues.rut;
    Persona_Natural[1] = iniciativa.personanaturals[0].dataValues.nombre;
    Persona_Natural[2] = iniciativa.personanaturals[0].dataValues.apellido;
    Persona_Natural[3] =
      iniciativa.personanaturals[0].dataValues.iniciativa_personanatural.dataValues.rol_persona_natural;
    Persona_Natural[4] = iniciativa.personanaturals[0].dataValues.genero;
    Persona_Natural[5] = iniciativa.personanaturals[0].dataValues.pais_origen;
    Iniciativa_Row[0] = iniciativa.nombre;
    Iniciativa_Row[1] = iniciativa.programas[0].dataValues.nombre;
    Iniciativa_Row[2] = iniciativa.tipo;
    Iniciativa_Row[3] = iniciativa.componente;
    Iniciativa_Row[4] = iniciativa.lineaconcurso;
    Iniciativa_Row[5] = iniciativa.ambitodominioareas[0].nombre;
    Iniciativa_Row[6] = iniciativa.comunas[0].nombre;
    Iniciativa_Row[7] = iniciativa.descripcion;
    Iniciativa_Row[8] = iniciativa.fechaInicio;
    Iniciativa_Row[9] = iniciativa.fechaFin;
    Espacio_Cultural[0] = results3[0].nombre;
    Espacio_Cultural[1] = results3[0].direccion;
    Espacio_Cultural[2] = results5[0].tipo;
    Publico_Objetivo[0] = iniciativa.tipoPublicoObjetivo;
    Publico_Objetivo[1] = iniciativa.cantPublico;
    Financiamiento[0] = iniciativa.formaFinanciamiento;
    Financiamiento[1] = iniciativa.presupuesto;
    Documento_[0] = iniciativa.documentos[0].titulo;
    Documento_[1] = iniciativa.documentos[0].fecha_publicacion;
    Documento_[2] = iniciativa.documentos[0].autor;
    Documento_[3] = iniciativa.documentos[0].tipo;
    Documento_[4] = iniciativa.documentos[0].fuente;
    Documento_[5] = iniciativa.documentos[0].materia;
    Documento_[6] = iniciativa.documentos[0].enlace;
    console.log(iniciativa);
    return [
      Personalidad_Juridica,
      Persona_Natural,
      Iniciativa_Row,
      Espacio_Cultural,
      Espacio_Cultural,
      Publico_Objetivo,
      Financiamiento,
      Documento_,
    ];
  } catch (error) {
    throw new Error(error);
  }
}

export async function getCuentasIniciativas_(Body) {
  console.log(Body);
  const { Page, PerPage, token } = Body;
  const limit = parseInt(PerPage, 10);
  const page = parseInt(Page, 10);
  const offset = (page - 1) * limit;

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const cuentaId = parseInt(decoded.userId, 10);

  const Options = {
    limit: limit,
    offset: offset,
    subQuery: false,
    nest: true, //
    where: {
      cuentaId: cuentaId,
      flag: true,
    },
    include: [
      {
        model: Comuna,
        attributes: ["nombre"],
        as: "comunas",
      },
      {
        model: Programa,
        as: "programas",
        attributes: ["nombre"],
      },
      {
        model: Documento,
        as: "documentos",
        attributes: ["titulo", "enlace"],
      },
    ],
  };

  try {
    const { count, rows } = await Iniciativa.findAndCountAll(Options);
    const totalPages = Math.ceil(count / PerPage);
    return {
      counts: count,
      results: rows,
      totalPages: totalPages,
    };
  } catch (error) {
    console.log(error);
    return { message: "Error al obtener las iniciativas." };
  }
}

export async function getData_() {
  try {
    const data1 = await Programa.findAll({
      // Agrupa las iniciativas por el programa
      include: [
        {
          model: Iniciativa,
          attributes: [],
          duplicating: false,
        },
      ],
      attributes: [
        "nombre",
        [sequelize.fn("COUNT", sequelize.col("iniciativas.id")), "cantidad"],
      ],
      includeIgnoreAttributes: false,
      group: ["id"],
    });

    const data2 = await Comuna.findAll({
      // Agrupa las iniciativas por la comuna
      include: [
        {
          model: Iniciativa,
          attributes: [],
          duplicating: false,
        },
      ],
      attributes: [
        "nombre",
        [sequelize.fn("COUNT", sequelize.col("iniciativas.id")), "cantidad"],
      ],
      includeIgnoreAttributes: false,
      group: ["id"],
    });

    const data3 = await ambitodominioarea.findAll({
      // Agrupa las iniciativas por el ambito
      include: [
        {
          model: Iniciativa,
          attributes: [],
          duplicating: false,
        },
      ],
      attributes: [
        "nombre",
        [sequelize.fn("COUNT", sequelize.col("iniciativas.id")), "cantidad"],
      ],
      includeIgnoreAttributes: false,
      group: ["id"],
    });

    return {
      data1: data1,
      data2: data2,
      data3: data3,
    };
  } catch (error) {
    console.log(error);
    return { hola: "hola", message: error.message };
  }
}
