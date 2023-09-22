import { PersonaNatural } from "../models/PersonaNatural.js";

export async function createPersonanatural_(personanatural){
    const { id, rut, ig, sitio_web , nombre, correo, telefono, apellido, genero, pais_origen, pueblo_originario} = personanatural
    try {
        const newPersonanatural = await PersonaNatural.create({
            id,
            rut, 
            ig,
            sitio_web,
            nombre,
            correo,
            telefono,
            apellido,
            genero,
            pais_origen,
            pueblo_originario
          });
          return newPersonanatural
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getPersonanaturals_(){
    try {
        const personanaturals = await PersonaNatural.findAll({
            attributes: ["id", "rut", "ig", "sitio_web" , "nombre", "correo", "telefono", "apellido", "genero", "pais_origen", "pueblo_originario"],
            order: [["id", "DESC"]],
        });
        return personanaturals
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function updatePersonanatural_(personanatural){
    const { id, rut, ig, sitio_web , nombre, correo, telefono, apellido, genero, pais_origen, pueblo_originario} = personanatural
    try {
        const personanatural_update = await PersonaNatural.findByPk(id);
        console.log(personanatural_update)
        personanatural_update.rut = rut;
        personanatural_update.ig = ig;
        personanatural_update.sitio_web = sitio_web;
        personanatural_update.nombre = nombre;
        personanatural_update.correo = correo;
        personanatural_update.telefono = telefono;
        personanatural_update.apellido = apellido;
        personanatural_update.genero = genero;
        personanatural_update.pais_origen = pais_origen;
        personanatural_update.pueblo_originario = pueblo_originario;
        await personanatural_update.save();
        return "se modifico correctamente" 
    } catch (error) {
        console.log(error)
        throw new Error("Sucedio un error......")
    }  

}


export async function deletePersonanatural_(id){
    try {
        await PersonaNatural.destroy({
            where: { id },
        }); 
        return "se elimino correctamente"
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getPersonanatural_(id){
    try {
        const personanatural = await PersonaNatural.findOne({
            where: { id },
            attributes: ["id", "rut", "ig", "sitio_web" , "nombre", "correo", "telefono", "apellido", "genero", "pais_origen", "pueblo_originario"],
        });
        return personanatural
        
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}