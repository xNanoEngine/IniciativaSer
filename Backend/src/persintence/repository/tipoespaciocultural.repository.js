import { tipoespaciocultural } from "../models/TipoEspacioCultural.js";

export async function createTipoespaciocultural_(tipo_espacio){
    const { tipo } = tipo_espacio
    try {
        const newtipoespaciocultural = await tipoespaciocultural.create({
            tipo
        });
        return newtipoespaciocultural
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getTiposespaciocultural_(){
    try {
        const tipo_espacio = await tipoespaciocultural.findAll({
            attributes: ["tipo"],
            order: [["tipo", "DESC"]],
        });
        return tipo_espacio
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function updateTipoespaciocultural_(tipo_espacio){
    const { tipo } = tipo_espacio
    try {
         
        const tipoespaciocultural_update = await tipoespaciocultural.findByPk(id);
        console.log(tipoespaciocultural_update)
        tipoespaciocultural_update.tipo = tipo;
        await tipoespaciocultural_update.save();
        return "se modifico correctamente" 
    } catch (error) {
        console.log(error)
        throw new Error("Sucedio un error......")
    }  

}


export async function deleteTipoespaciocultural_(tipo){
    try {
        await tipoespaciocultural.destroy({
            where: { tipo },
        }); 
        return "se elimino correctamente"
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getTipoespaciocultural_(id){
    try {
        const tipo_espacio = await tipoespaciocultural.findOne({
            where: { tipo },
            attributes: ["tipo"],
        });
        return tipo_espacio
        
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}