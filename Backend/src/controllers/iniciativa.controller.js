import { Iniciativa } from "../persintence/models/Iniciativa.js";
import { createIniciativa_, getIniciativas_, updateIniciativa_, deleteIniciativa_,getIniciativa_} from "../persintence/repository/iniciativas.repository.js";

export async function createIniciativa(req, res) {
  const { id, idInterno, nombre, tipo, descripcion, componente, presupuesto, formaFinanciamiento, tipoPublicoObjetivo, cantPublico, fechaInicio, fechaFin } = req.body;
  const iniciativa = { 
    id,
    idInterno, 
    nombre,
    tipo,
    descripcion,
    componente,
    presupuesto,
    formaFinanciamiento,
    tipoPublicoObjetivo,
    cantPublico,
    fechaInicio,
    fechaFin,
  }
  createIniciativa_(iniciativa).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
}

export async function getIniciativas(req, res) {
  getIniciativas_().then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
}

export async function updateIniciativa(req, res) {
 
    const { id } = req.params;
    const { idInterno, nombre, tipo, descripcion, componente, presupuesto, formaFinanciamiento, tipoPublicoObjetivo, cantPublico, fechaInicio, fechaFin } = req.body;
    const iniciativa = { 
        id,
        idInterno, 
        nombre,
        tipo,
        descripcion,
        componente,
        presupuesto,
        formaFinanciamiento,
        tipoPublicoObjetivo,
        cantPublico,
        fechaInicio,
        fechaFin,
    }
    updateIniciativa_(iniciativa).then(msg=> {
      res.status(200).json({status : true, msg : msg})
    }, error => {
      res.status(400).json({status : false, error : error.message })
    })
    
    
};

export async function deleteIniciativa(req, res) {
  const { id } = req.params;
  deleteIniciativa_(id).then(msg=> {
    res.status(200).json({status : true, msg : msg})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
};


export async function getIniciativa(req, res) {
  const { id } = req.params;
  getIniciativa_(id).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
}