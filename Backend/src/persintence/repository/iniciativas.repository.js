import { Iniciativa } from "../models/Iniciativa.js";

export async function createIniciativa_(iniciativa){
    const { id, idInterno, nombre, tipo, descripcion, componente, presupuesto, formaFinanciamiento, tipoPublicoObjetivo, cantPublico, fechaInicio, fechaFin } = iniciativa
    try {
        const newIniciativa = await Iniciativa.create({
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
          });
          return newIniciativa
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getIniciativas_(){
    try {
        const iniciativas = await Iniciativa.findAll({
            attributes: ["id", "idInterno", "nombre", "tipo", "descripcion", "componente", "presupuesto", "formaFinanciamiento", "tipoPublicoObjetivo", "cantPublico", "fechaInicio", "fechaFin"],
            order: [["id", "DESC"]],
        });
        return iniciativas
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function updateIniciativa_(iniciativa){
    const { id, idInterno, nombre, tipo, descripcion, componente, presupuesto, formaFinanciamiento, tipoPublicoObjetivo, cantPublico, fechaInicio, fechaFin } = iniciativa
    try {
         
        const iniciativa_update = await Iniciativa.findByPk(id);
        console.log(iniciativa_update)
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
        return "se modifico correctamente" 
    } catch (error) {
        console.log(error)
        throw new Error("Sucedio un error......")
    }  

}


export async function deleteIniciativa_(id){
    try {
        await Iniciativa.destroy({
            where: { id },
        }); 
        return "se elimino correctamente"
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getIniciativa_(id){
    try {
        const iniciativa = await Iniciativa.findOne({
            where: { id },
            attributes: ["id", "idInterno", "nombre", "tipo", "descripcion", "componente", "presupuesto", "formaFinanciamiento", "tipoPublicoObjetivo", "cantPublico", "fechaInicio", "fechaFin"],
        });
        return iniciativa
        
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}