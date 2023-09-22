import { Comuna } from "../persintence/models/Comuna.js";
import { createComuna_, getComunas_, updateComuna_, deleteComuna_,getComuna_} from "../persintence/repository/comunas.repository.js";

export async function createComuna(req, res) {
  const { id, nombre,cantHabitantes} = req.body;
  const comuna = { 
    id,
    nombre, 
    cantHabitantes
  }
  createComuna_(comuna).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
}

export async function getComunas(req, res) {
  getComunas_().then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
}

export async function updateComuna(req, res) {
 
    const { id } = req.params;
    const {nombre, cantHabitantes} = req.body;
    const comuna = { 
        id,
        nombre, 
        cantHabitantes
      }
    updateComuna_(comuna).then(msg=> {
      res.status(200).json({status : true, msg : msg})
    }, error => {
      res.status(400).json({status : false, error : error.message })
    })
    
    
};

export async function deleteComuna(req, res) {
  const { id } = req.params;
  deleteComuna_(id).then(msg=> {
    res.status(200).json({status : true, msg : msg})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
};


export async function getComuna(req, res) {
  const { id } = req.params;
  getComuna_(id).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
}