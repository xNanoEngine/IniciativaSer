import { Objetivo } from "../models/Objetivo.js";

export async function createObjetivo_(objetivo){
    const { id, nombre_objetivo, numero, nivel } = objetivo
    try {
        const newObjetivo = await Objetivo.create({
            id,
            nombre_objetivo,
            numero,
            nivel
            });
            return newObjetivo
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getObjetivos_(){
    try {
        const Objetivos = await Objetivo.findAll({
            attributes: ["id", "nombre_objetivo", "numero", "nivel"],
            order: [["id", "DESC"]],
        });
        return Objetivos
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function updateObjetivo_(Objetivo){
    const { id, nombre_objetivo, numero, nivel } = Objetivo
    try {

        const Objetivo_update = await Objetivo.findByPk(id);
        console.log(Objetivo_update)
        Objetivo_update.nombre_objetivo = nombre_objetivo;
        Objetivo_update.numero = numero;
        Objetivo_update.nivel = nivel;
        await Objetivo_update.save();
        return "se modifico correctamente" 
    } catch (error) {
        console.log(error)
        throw new Error("Sucedio un error......")
    }  

}


export async function deleteObjetivo_(id){
    try {
        await Objetivo.destroy({
            where: { id },
        }); 
        return "se elimino correctamente"
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getObjetivo_(id){
    try {
        const Objetivo = await Objetivo.findOne({
            where: { id },
            attributes: ["id", "nombre_objetivo", "numero", "nivel"],
        });
        return Objetivo
        
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}