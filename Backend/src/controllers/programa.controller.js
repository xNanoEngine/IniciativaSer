import { Programa } from "../persintence/models/Programa.js";
import { createPrograma_, getProgramas_, updatePrograma_, deletePrograma_,getPrograma_} from "../persintence/repository/programas.repository.js";

export async function createPrograma(req, res) {
  const { id, nombre, descripcion, url} = req.body;
  const programa = { 
    id,
    nombre, 
    descripcion,
    url
  }
  createPrograma_(programa).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
}

export async function getProgramas(req, res) {
  getProgramas_().then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
}

export async function updatePrograma(req, res) {
 
    const { id } = req.params;
    const {nombre, descripcion, url} = req.body;
    const programa = { 
        id,
        nombre, 
        descripcion,
        url
      }
    updatePrograma_(programa).then(msg=> {
      res.status(200).json({status : true, msg : msg})
    }, error => {
      res.status(400).json({status : false, error : error.message })
    })
    
    
};

export async function deletePrograma(req, res) {
  const { id } = req.params;
  deletePrograma_(id).then(msg=> {
    res.status(200).json({status : true, msg : msg})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
};


export async function getPrograma(req, res) {
  const { id } = req.params;
  getPrograma_(id).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
}