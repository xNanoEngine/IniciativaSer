import { Comuna } from "../models/Comuna.js";

export async function createComuna_(comuna){
    const { id, nombre,cantHabitantes} = comuna
    try {
        const newComuna = await Comuna.create({
            id,
            nombre, 
            cantHabitantes
          });
          return newComuna
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getComunas_(){
    try {
        const comunas = await Comuna.findAll({
            attributes: ["id", "nombre","cantHabitantes"],
            order: [["id", "DESC"]],
        });
        return comunas
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function updateComuna_(comuna){
    const { id, nombre,cantHabitantes} = comuna
    try {
        const comuna_update = await Comuna.findByPk(id);
        console.log(comuna_update)
        comuna_update.nombre = nombre;
        comuna_update.cantHabitantes = cantHabitantes;
        await comuna_update.save();
        return "se modifico correctamente" 
    } catch (error) {
        console.log(error)
        throw new Error("Sucedio un error......")
    }  

}


export async function deleteComuna_(id){
    try {
        await Comuna.destroy({
            where: { id },
        }); 
        return "se elimino correctamente"
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getComuna_(id){
    try {
        const comuna = await Comuna.findOne({
            where: { id },
            attributes: ["id", "nombre","cantHabitantes"],
        });
        return comuna
        
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}