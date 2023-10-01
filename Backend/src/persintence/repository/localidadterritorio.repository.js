import { Localidad_Territorio } from "../models/LocalidadTerritorio.js";

export async function createLocalidadterritorio_(localidad_territorio) {
    const { id, nombre, tipo } = localidad_territorio
    try {
        const newLocalidad_Territorio = await Localidad_Territorio.create({
            id,
            nombre,
            tipo
        });
        return newLocalidad_Territorio
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getLocalidadesterritorio_(){
    try {
        const localidades_territorio = await Localidad_Territorio.findAll({
            attributes: ["id", "nombre", "tipo"],
            order: [["id", "DESC"]],
        });
        return localidades_territorio
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function updateLocalidadterritorio_(localidad_territorio){
    const { id, nombre, tipo } = localidad_territorio
    try {
        const localidad_territorio_update = await Localidad_Territorio.findByPk(id);
        console.log(localidad_territorio_update)
        localidad_territorio_update.titulo = titulo;
        localidad_territorio_update.nombre = nombre;
        localidad_territorio_update.tipo = tipo;
        await localidad_territorio_update.save();
        return "se modifico correctamente" 
    } catch (error) {
        console.log(error)
        throw new Error("Sucedio un error......")
    }  

}


export async function deleteLocalidadterritorio_(id){
    try {
        await Localidad_Territorio.destroy({
            where: { id },
        }); 
        return "se elimino correctamente"
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getLocalidadterritorio_(id){
    try {
        const localidad_territorio = await Localidad_Territorio.findOne({
            where: { id },
            attributes: ["id", "nombre", "tipo"],
        });
        return localidad_territorio
        
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}