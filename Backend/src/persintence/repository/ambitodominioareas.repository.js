import { ambitodominioarea } from "../models/ambitodominioarea.js";

export async function createambitodominioarea_(ambitodominioarea){
    const { nombre} = ambitodominioarea
    try {
        const newambitodominioarea = await ambitodominioarea.create({
            nombre
          });
          return newambitodominioarea
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getambitodominioareas_(){
    try {
        const ambitodominioareas = await ambitodominioarea.findAll({
            attributes: ["nombre"],
            order: [["nombre", "DESC"]],
        });
        return ambitodominioareas
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}


export async function deleteambitodominioarea_(nombre){
    try {
        await ambitodominioarea.destroy({
            where: { nombre },
        }); 
        return "se elimino correctamente"
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getambitodominioarea_(nombre){
    try {
        const ambitodominioarea = await ambitodominioarea.findOne({
            where: { nombre },
            attributes: ["nombre"],
        });
        return ambitodominioarea
        
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}