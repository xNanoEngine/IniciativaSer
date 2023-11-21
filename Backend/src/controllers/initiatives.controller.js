import { Iniciativa } from "../persintence/models/Iniciativa.js";
import { Programa } from "../persintence/models/Programa.js";
import { Documento } from "../persintence/models/Documento.js";
import { ambitodominioarea } from "../persintence/models/ambitodominioarea.js";

import {
  createInitiative,
  getIniciativas_,
  updateIniciativa_,
  deleteIniciativa_,
  getIniciativa_,
} from "../persintence/repository/initiatives.repository.js";

import { getDocumentos_ } from "../persintence/repository/documentos.repository.js";

export async function createIniciativa(req, res) {
  createInitiative(req.body.formData).then(
    (data) => {
      res.status(200).json({ status: true });
    },
    (error) => {
      res.status(400).json({ status: false, error: error.message });
    }
  );
}

export async function getIniciativas(req, res) {
  getIniciativas_(req.query).then(
    (data) => {
      res.status(200).json(data);
    },
    (error) => {
      res.status(400).json({ status: false, error: error.message });
    }
  );
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
  getDocumentos_(req.query).then(
    (data) => {
      res.status(200).json(data);
    },
    (error) => {
      res.status(400).json({ status: false, error: error.message });
    }
  );
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
