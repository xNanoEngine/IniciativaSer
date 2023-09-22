import { PersonaJuridica } from "../persintence/models/PersonaJuridica.js";
import { createPersonajuridica_, getPersonajuridicas_, updatePersonajuridica_, deletePersonajuridica_,getPersonajuridica_} from "../persintence/repository/personasjuridicas.repository.js";

export async function createPersonajuridica(req, res) {
  const { id, nombre, rut, tipo, url, telefono , IG, correo } = req.body;
  const persona_juridica = { 
    id,
    nombre, 
    rut,
    tipo,
    url,
    telefono,
    IG,
    correo
  }
  createPersonajuridica_(persona_juridica).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
}

export async function getPersonajuridicas(req, res) {
  getPersonajuridicas_().then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
}

export async function updatePersonajuridica(req, res) {
 
    const { id } = req.params;
    const { nombre, rut, tipo, url, telefono , IG, correo } = req.body;
    const persona_juridica = { 
        id,
        nombre, 
        rut,
        tipo,
        url,
        telefono,
        IG,
        correo
      }
    updatePersonajuridica_(persona_juridica).then(msg=> {
      res.status(200).json({status : true, msg : msg})
    }, error => {
      res.status(400).json({status : false, error : error.message })
    })
    
    
};

export async function deletePersonajuridica(req, res) {
  const { id } = req.params;
  deletePersonajuridica_(id).then(msg=> {
    res.status(200).json({status : true, msg : msg})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
};


export async function getPersonajuridica(req, res) {
  const { id } = req.params;
  getPersonajuridica_(id).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
}