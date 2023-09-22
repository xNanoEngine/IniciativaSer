import { PersonaJuridica } from "../models/PersonaJuridica.js";

export async function createPersonajuridica_(persona_juridica){
    const { id, nombre, rut, tipo, url, telefono , IG, correo } = persona_juridica
    try {
        const newPersonaJuridica = await PersonaJuridica.create({
            id,
            nombre, 
            rut,
            tipo,
            url,
            telefono,
            IG,
            correo
          });
          return newPersonaJuridica
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getPersonajuridicas_(){
    try {
        const documentos = await PersonaJuridica.findAll({
            attributes: ["id", "nombre", "rut", "tipo", "url", "telefono" , "IG", "correo" ],
            order: [["id", "DESC"]],
        });
        return documentos
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function updatePersonajuridica_(persona_juridica){
    const { id, nombre, rut, tipo, url, telefono , IG, correo } = persona_juridica
    try {
         
        const persona_juridica_update = await PersonaJuridica.findByPk(id);
        console.log(documento_update)
        persona_juridica.id = id;
        persona_juridica.nombre = nombre;
        persona_juridica.rut = rut;
        persona_juridica.tipo = tipo;
        persona_juridica.url = url;
        persona_juridica.telefono = telefono;
        persona_juridica.IG = IG;
        persona_juridica.correo = correo;
        await persona_juridica_update.save();
        return "se modifico correctamente" 
    } catch (error) {
        console.log(error)
        throw new Error("Sucedio un error......")
    }  

}


export async function deletePersonajuridica_(id){
    try {
        await PersonaJuridica.destroy({
            where: { id },
        }); 
        return "se elimino correctamente"
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getPersonajuridica_(id){
    try {
        const persona_juridica = await PersonaJuridica.findOne({
            where: { id },
            attributes: ["id", "nombre", "rut", "tipo", "url", "telefono" , "IG", "correo" ],
        });
        return persona_juridica
        
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}