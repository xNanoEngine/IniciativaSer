import { Programa } from "../models/Programa.js";

export async function createPrograma_(programa){
    const { id, nombre, descripcion, url} = programa
    try {
        const newPrograma = await Programa.create({
            id,
            nombre, 
            descripcion,
            url
          });
          return newPrograma
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getProgramas_(){
    try {
        const programas = await Programa.findAll({
            attributes: ["id", "nombre", "descripcion", "url"],
            order: [["id", "DESC"]],
        });
        return programas
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function updatePrograma_(programa){
    const { id, nombre, descripcion, url} = programa
    try {
        const programa_update = await Programa.findByPk(id);
        console.log(programa_update)
        programa_update.nombre = nombre;
        programa_update.descripcion = descripcion;
        programa_update.url = url;
        await programa_update.save();
        return "se modifico correctamente" 
    } catch (error) {
        console.log(error)
        throw new Error("Sucedio un error......")
    }  

}


export async function deletePrograma_(id){
    try {
        await Programa.destroy({
            where: { id },
        }); 
        return "se elimino correctamente"
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getPrograma_(id){
    try {
        const programa = await Programa.findOne({
            where: { id },
            attributes: ["id", "nombre", "descripcion", "url"],
        });
        return programa
        
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}