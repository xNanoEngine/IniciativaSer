import { PersonaNatural } from "../persintence/models/PersonaNatural.js";
import { createPersonanatural_, getPersonanaturals_, updatePersonanatural_, deletePersonanatural_,getPersonanatural_} from "../persintence/repository/personanaturals.repository.js";

export async function createPersonanatural(req, res) {
  const { id, rut, ig, sitio_web , nombre, correo, telefono, apellido, genero, pais_origen, pueblo_originario } = req.body;
  const personanatural = { 
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
  }
  createPersonanatural_(personanatural).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
}

export async function getPersonanaturals(req, res) {
  getPersonanaturals_().then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
}

export async function updatePersonanatural(req, res) {
 
    const { id } = req.params;
    const {rut, ig, sitio_web , nombre, correo, telefono, apellido, genero, pais_origen, pueblo_originario} = req.body;
    const personanatural = { 
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
      }
    updatePersonanatural_(personanatural).then(msg=> {
      res.status(200).json({status : true, msg : msg})
    }, error => {
      res.status(400).json({status : false, error : error.message })
    })
    
    
};

export async function deletePersonanatural(req, res) {
  const { id } = req.params;
  deletePersonanatural_(id).then(msg=> {
    res.status(200).json({status : true, msg : msg})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
};


export async function getPersonanatural(req, res) {
  const { id } = req.params;
  getPersonanatural_(id).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
}