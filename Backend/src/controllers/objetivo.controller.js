import { Objetivo } from "../persintence/models/Objetivo.js";
import { createObjetivo_, getObjetivos_, updateObjetivo_, deleteObjetivo_,getObjetivo_} from "../persintence/repository/objetivo.repository.js";

export async function createObjetivo(req, res) {
  const { id, nombre_objetivo, numero, nivel } = req.body;
  const objetivo = { 
    id,
    nombre_objetivo,
    numero,
    nivel
  }
  createObjetivo_(objetivo).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
}

export async function getObjetivos(req, res) {
  getObjetivos_().then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
}

export async function updateObjetivo(req, res) {

    const { id } = req.params;
    const { nombre_objetivo, numero, nivel } = req.body;
    const objetivo = { 
        id,
        nombre_objetivo,
        numero,
        nivel
    }
    updateObjetivo_(objetivo).then(msg=> {
        res.status(200).json({status : true, msg : msg})
    }, error => {
        res.status(400).json({status : false, error : error.message })
    })
    
    
};

export async function deleteObjetivo(req, res) {
  const { id } = req.params;
  deleteObjetivo_(id).then(msg=> {
    res.status(200).json({status : true, msg : msg})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
};


export async function getObjetivo(req, res) {
  const { id } = req.params;
  getObjetivo_(id).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
}