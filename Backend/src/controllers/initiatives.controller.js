import jwt from "jsonwebtoken";
import { Op } from "sequelize";
import sequelize from "sequelize";
import { Cuentas } from "../persintence/models/Cuentas.js";
import { Iniciativa } from "../persintence/models/Iniciativa.js";
import { Programa } from "../persintence/models/Programa.js";
import { Comuna } from "../persintence/models/Comuna.js";
import { Documento } from "../persintence/models/Documento.js";
import { ambitodominioarea } from "../persintence/models/ambitodominioarea.js";

import {
  createIniciativa_,
  getIniciativas_,
  updateIniciativa_,
  deleteIniciativa_,
  getIniciativa_,
} from "../persintence/repository/initiatives.repository.js";
import {
  createComuna_,
  getComunas_,
  updateComuna_,
  deleteComuna_,
  getComuna_,
} from "../persintence/repository/comunas.repository.js";
import {
  createambitodominioarea_,
  getambitodominioareas_,
  deleteambitodominioarea_,
  getambitodominioarea_,
} from "../persintence/repository/ambitodominioareas.repository.js";
import {
  createDocumento_,
  getDocumentos_,
  updateDocumento_,
  deleteDocumento_,
  getDocumento_,
} from "../persintence/repository/documentos.repository.js";
import {
  createEspacioCultural_,
  getEspaciosCulturales_,
  updateEspacioCultural_,
  deleteEspacioCultural_,
  getEspacioCultural_,
} from "../persintence/repository/espaciocultural.repository.js";
import {
  createLocalidadterritorio_,
  getLocalidadesterritorio_,
  updateLocalidadterritorio_,
  deleteLocalidadterritorio_,
  getLocalidadterritorio_,
} from "../persintence/repository/localidadterritorio.repository.js";
import {
  createObjetivo_,
  getObjetivos_,
  updateObjetivo_,
  deleteObjetivo_,
  getObjetivo_,
} from "../persintence/repository/objetivo.repository.js";
import {
  createPersonajuridica_,
  getPersonajuridicas_,
  updatePersonajuridica_,
  deletePersonajuridica_,
  getPersonajuridica_,
} from "../persintence/repository/personasjuridicas.repository.js";
import {
  createPersonanatural_,
  getPersonanaturals_,
  updatePersonanatural_,
  deletePersonanatural_,
  getPersonanatural_,
} from "../persintence/repository/personanaturals.repository.js";
import {
  createPrograma_,
  getProgramas_,
  updatePrograma_,
  deletePrograma_,
  getPrograma_,
} from "../persintence/repository/programas.repository.js";
import {
  createTipoespaciocultural_,
  getTiposespaciocultural_,
  updateTipoespaciocultural_,
  deleteTipoespaciocultural_,
  getTipoespaciocultural_,
} from "../persintence/repository/tipoespaciocultural.repository.js";

export async function createIniciativa(req, res) {
  const {
    Iniciativa_id,
    Iniciativa_idInterno,
    Iniciativa_nombre,
    Iniciativa_tipo,
    Iniciativa_descripcion,
    Iniciativa_componente,
    Iniciativa_presupuesto,
    Iniciativa_formaFinanciamiento,
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
    PersonaNatural_pueblo_originario,
    Programa_id,
    Programa_nombre,
    Programa_descripcion,
    Programa_url,
    TipoEspacioCultural_tipo,
    token,
  } = req.body;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const cuentaId = decoded.userId;

  const Iniciativa_ = {
    id: Iniciativa_id,
    idInterno: Iniciativa_idInterno,
    nombre: Iniciativa_nombre,
    tipo: Iniciativa_tipo,
    descripcion: Iniciativa_descripcion,
    componente: Iniciativa_componente,
    presupuesto: Iniciativa_presupuesto,
    formaFinanciamiento: Iniciativa_formaFinanciamiento,
    tipoPublicoObjetivo: Iniciativa_tipoPublicoObjetivo,
    cantPublico: Iniciativa_cantPublico,
    fechaInicio: Iniciativa_fechaInicio,
    fechaFin: Iniciativa_fechaFin,
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
    await comuna.addIniciativa(iniciativa);
    await persona_natural.addIniciativa(iniciativa);
    await localidad_territorio.addIniciativa(iniciativa);
    await objetivo.addIniciativa(iniciativa);
    await persona_juridica.addIniciativa(iniciativa);
    await programa.addIniciativa(iniciativa);
    await ambito_dominio_area.addIniciativa(iniciativa);
    await ambito_dominio_area.addPersonanatural(persona_natural);
    await ambito_dominio_area.addDocumento(documento);
    await ambito_dominio_area.addPersona_juridica(persona_juridica);
    //console.log(Object.keys(comuna.__proto__));
    console.log("TERMINO");
    res.status(200).json({ status: true });
  } catch (error) {
    res.status(400).json({ status: false, error: error.message });
  }
}

export async function getIniciativas(req, res) {
  const { Filtro_Iniciativa, Filtro_Comuna, Busqueda, Page, PerPage, token } =
    req.query;
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
  } else {
    //Busqueda global, (Cuando no hay filtros de iniciativa, ventana home)
    // falta añadir busqueda global por programa

    Options.include = [
      {
        model: Programa,
        as: "programas",
        attributes: ["nombre"],
        where: {
          nombre: { [Op.like]: `%${Busqueda}%` },
        },
      },
      // Otras inclusiones
    ];
    Options.where = {
      [Op.or]: [
        { nombre: { [Op.like]: `%${Busqueda}%` } },
        { descripcion: { [Op.like]: `%${Busqueda}%` } },
        { componente: { [Op.like]: `%${Busqueda}%` } },
        { formaFinanciamiento: { [Op.like]: `%${Busqueda}%` } },
        { "$programas.nombre$": { [Op.like]: `%${Busqueda}%` } },
      ],
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
      res.status(200).json({
        counts: count,
        results: iniciativasConCanEdit, // Enviar las iniciativas con el campo canEdit
        totalPages: totalPages,
        accountId: cuentaId,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error al obtener las iniciativas." });
    }
  } else {
    // Si no se proporciona un token, simplemente envía las iniciativas sin el campo canEdit
    try {
      const { count, rows } = await Iniciativa.findAndCountAll(Options);
      const totalPages = Math.ceil(count / PerPage);
      res.status(200).json({
        counts: count,
        results: rows,
        totalPages: totalPages,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error al obtener las iniciativas." });
    }
  }
}

export async function updateIniciativa(req, res) {
  const { id } = req.params;
  const {
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
  } = req.body;
  const iniciativa = {
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
  };
  updateIniciativa_(iniciativa).then(
    (msg) => {
      res.status(200).json({ status: true, msg: msg });
    },
    (error) => {
      res.status(400).json({ status: false, error: error.message });
    }
  );
}

export async function deleteIniciativa(req, res) {
  const { id } = req.params;
  deleteIniciativa_(id).then(
    (msg) => {
      res.status(200).json({ status: true, msg: msg });
    },
    (error) => {
      res.status(400).json({ status: false, error: error.message });
    }
  );
}

export async function getIniciativa(req, res) {
  const { id } = req.params;
  getIniciativa_(id).then(
    (data) => {
      res.status(200).json({ status: true, data: data });
    },
    (error) => {
      res.status(400).json({ status: false, error: error.message });
    }
  );
}

export async function getPrograma(req, res) {
  const { id } = req.params;
  try {
    console.log("getPrograma por id");
    const programa = await Programa.findOne({
      where: { id },
    });
    return programa;
  } catch (error) {
    throw new Error("Sucedio un error obteniendo programa por id......");
  }
}

export async function getProgramas(req, res) {
  const { currentPage, perPage } = req.body;
  const offset = (currentPage - 1) * perPage;
  try {
    console.log("getProgramas");
    const { counts, programas } = await Programa.findAndCountAll({
      attributes: [
        "id",
        "nombre",
        "descripcion",
        "url",
        //"imagen"
      ],
      order: [["nombre", "DESC"]],
      limit: perPage,
      offset: offset,
      subQuery: false,
    });
    const totalPages = Math.ceil(counts / perPage);
    res.json({
      totalItems: counts, // Total de artículos
      totalPages: totalPages, // Número total de páginas
      currentPage: currentPage, // Página actual
      data: programas,
    });
    //return programas;
  } catch (error) {
    throw new Error("Sucedio un error obteniendo programas......");
  }
}

export async function getDocumento(req, res) {
  const { id } = req.params;
  try {
    console.log("getDocumento por id");
    const documento = await Documento.findOne({
      include: [
        {
          model: ambitodominioarea,
          as: "ambitodominioareas",
          attributes: ["nombre"],
        },
        {
          model: Iniciativa,
          attributes: ["nombre"],
        },
      ],
      where: { id },
    });
    return documento;
  } catch (error) {
    throw new Error("Sucedio un error obteniendo documento por id......");
  }
}

export async function getDocumentos(req, res) {
  const { Filtro_Tipo, Busqueda, Page, PerPage, token } = req.query;
  const limit = parseInt(PerPage, 10);
  const page = parseInt(Page, 10);
  const offset = (page - 1) * limit;

  const Options = {
    limit: limit,
    offset: offset,
    subQuery: false,
    include: [
      {
        model: Iniciativa,
        attributes: ["nombre"],
      },
      {
        model: ambitodominioarea,
        attributes: ["nombre"],
      },
    ],
    attributes: [
      "id",
      "titulo",
      "fecha_publicacion",
      "enlace",
      "materia",
      "fuente",
      "tipo",
      "autor",
    ],
    order: [["titulo", "DESC"]],
  };

  if (Filtro_Tipo) {
    const tipoFiltro = Filtro_Tipo.split(",");
    if (Busqueda !== "") {
      Options.where = {
        [Op.and]: [
          {
            [Op.or]: [
              { titulo: { [Op.like]: `%${Busqueda}%` } },
              { fuente: { [Op.like]: `%${Busqueda}%` } },
              { enlace: { [Op.like]: `%${Busqueda}%` } },
            ],
          },
          {
            tipo: {
              [Op.or]: tipoFiltro.map((nombre) => ({
                [Op.like]: nombre,
              })),
            },
          },
        ],
      };
    } else {
      Options.where = {
        tipo: {
          [Op.or]: tipoFiltro.map((nombre) => ({
            [Op.like]: nombre,
          })),
        },
      };
    }
  } else {
    Options.where = {
      [Op.or]: [
        { titulo: { [Op.like]: `%${Busqueda}%` } },
        { fuente: { [Op.like]: `%${Busqueda}%` } },
        { enlace: { [Op.like]: `%${Busqueda}%` } },
      ],
    };
  }

  try {
    console.log("getDocumentos");
    const { count, rows } = await Documento.findAndCountAll(Options);

    const totalPages = Math.ceil(count / PerPage);
    res.status(200).json({
      totalItems: count, // Total de artículos
      totalPages: totalPages, // Número total de páginas
      data: rows,
    });
  } catch (error) {
    res.status(500).json("Sucedio un error obteniendo documentos......");
  }

  // if (token) {
  //   const decoded = jwt.verify(token, process.env.JWT_SECRET);
  //   const AccountId = parseInt(decoded.userId, 10);
  //   Options.include = {
  //     model: Iniciativa,
  //     attributes: "cuentaId",
  //   }
  //   try {
  //     const { count, rows } = await Documento.findAndCountAll(Options);
  //     // Iterar a través de las iniciativas y establecer el campo canEdit
  //     const documentosConCanEdit = rows.map((documento) => ({
  //       ...documento.dataValues,
  //       canEdit: documento.cuentaId === AccountId,
  //     }));

  //     const totalPages = Math.ceil(count / PerPage);
  //     res.status(200).json({
  //       counts: count,
  //       results: iniciativasConCanEdit, // Enviar las iniciativas con el campo canEdit
  //       totalPages: totalPages,
  //       accountId: accountId,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     res.status(500).json({ message: "Error al obtener las iniciativas." });
  //   }
  // } else {
  //   // Si no se proporciona un token, simplemente envía los documentos sin el campo canEdit
  //   try {
  //     console.log("getDocumentos");
  //     const { count, rows } = await Documento.findAndCountAll({Options});
  //     const totalPages = Math.ceil(count / PerPage);
  //     res.json({
  //       counts: count,
  //       results: rows,
  //       totalPages: totalPages,
  //     });
  //   } catch (error) {
  //     throw new Error("Sucedio un error obteniendo documentos......");
  //   }
  // }
}
