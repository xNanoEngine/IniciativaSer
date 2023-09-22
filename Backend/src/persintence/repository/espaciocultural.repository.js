import { EspacioCultural } from "../models/EspacioCultural.js";

export async function createEspacioCultural_(espacio_cultural) {
    const { id, nombre, direccion, correo, telefono } = espacio_cultural
    try {
        const newEspacioCultural = await EspacioCultural.create({
            id, 
            nombre, 
            direccion, 
            correo, 
            telefono
        });
        return newEspacioCultural
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getEspaciosCulturales_(){
    try {
        const espacios_culturales = await EspacioCultural.findAll({
            attributes: ["id", "nombre", "direccion", "correo", "telefono"],
            order: [["id", "DESC"]],
        });
        return espacios_culturales
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function updateEspacioCultural_(espacio_cultural){
    const { id, nombre, direccion, correo, telefono } = espacio_cultural
    try {
        const EspacioCultural_update = await EspacioCultural.findByPk(id);
        console.log(EspacioCultural_update)
        EspacioCultural_update.titulo = titulo;
        EspacioCultural_update.nombre = nombre;
        EspacioCultural_update.direccion = direccion;
        EspacioCultural_update.correo = correo;
        EspacioCultural_update.telefono = telefono;
        await EspacioCultural_update.save();
        return "se modifico correctamente" 
    } catch (error) {
        console.log(error)
        throw new Error("Sucedio un error......")
    }  

}


export async function deleteEspacioCultural_(id){
    try {
        await EspacioCultural.destroy({
            where: { id },
        }); 
        return "se elimino correctamente"
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getEspacioCultural_(id){
    try {
        const espacio_cultural = await EspacioCultural.findOne({
            where: { id },
            attributes: ["id", "nombre", "direccion", "correo", "telefono"],
        });
        return espacio_cultural;
        
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}