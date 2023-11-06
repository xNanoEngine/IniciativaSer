import { Documento } from "../models/Documento.js";

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

export async function getDocumentos_(){
    try {
        const documentos = await Documento.findAll({
            attributes: ["id", "titulo", "fecha_publicacion", "enlace", "materia", "fuente", "tipo"],
            order: [["id", "DESC"]],
        });
        return documentos
    } catch (error) {
        throw new Error("Sucedio un error......")
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