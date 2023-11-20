import { Documento } from "../models/Documento.js";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";

import { Iniciativa } from "../models/Iniciativa.js";
import { ambitodominioarea } from "../models/ambitodominioarea.js";

export async function createDocumento_(documento){
    const { id, titulo, fecha_publicacion, enlace, materia, fuente, tipo, autor } = documento
    try {
        const newDocumento = await Documento.create({
            id,
            titulo,
            fecha_publicacion,
            enlace,
            materia,
            fuente,
            tipo,
            autor
        });
        return newDocumento
    } catch (error) {
        throw new Error("Sucedio un error......")
    }
}

export async function getDocumentos_(body){
    const { Filtro_Tipo, Busqueda, Page, PerPage, token } = body;
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
          where: {flag: true}
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
      return({
        totalItems: count, // Total de artículos
        totalPages: totalPages, // Número total de páginas
        data: rows,
      });
    } catch (error) {
      return("Sucedio un error obteniendo documentos......");
    }
}

export async function updateDocumento_(documento){
    const { id, titulo, fecha_publicacion, enlace, materia, fuente, tipo } = documento
    try {
         
        const documento_update = await Documento.findByPk(id);
        console.log(documento_update)
        documento_update.titulo = titulo;
        documento_update.fecha_publicacion = fecha_publicacion;
        documento_update.enlace = enlace;
        documento_update.materia = materia;
        documento_update.fuente = fuente;
        documento_update.tipo = tipo;
        await documento_update.save();
        return "se modifico correctamente" 
    } catch (error) {
        console.log(error)
        throw new Error("Sucedio un error......")
    }  

}


export async function deleteDocumento_(id){
    try {
        await Documento.destroy({
            where: { id },
        }); 
        return "se elimino correctamente"
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getDocumento_(id){
    try {
        const documento = await Documento.findOne({
            where: { id },
            attributes: ["id", "titulo", "fecha_publicacion", "enlace", "materia", "fuente", "tipo"],
        });
        return documento
        
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}
