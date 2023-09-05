import { Documento } from "../persintence/models/Documento.js";
import { createDocumento_, getDocumentos_, updateDocumento_, deleteDocumento_,getDocumento_} from "../persintence/repository/documentos.repository.js";

export async function createDocumento(req, res) {
  const { id, titulo, fecha_publicacion, enlace, materia, fuente, tipo } = req.body;
  const documento = { 
    id,
    titulo, 
    fecha_publicacion,
    enlace,
    materia,
    fuente,
    tipo
  }
  createDocumento_(documento).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
}

export async function getDocumentos(req, res) {
  getDocumentos_().then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
}

export async function updateDocumento(req, res) {
 
    const { id } = req.params;
    const { titulo, fecha_publicacion, enlace, materia, fuente, tipo } = req.body;
    const documento = { 
      id,
      titulo, 
      fecha_publicacion,
      enlace,
      materia,
      fuente,
      tipo
    }
    updateDocumento_(documento).then(msg=> {
      res.status(200).json({status : true, msg : msg})
    }, error => {
      res.status(400).json({status : false, error : error.message })
    })
    
    
};

export async function deleteDocumento(req, res) {
  const { id } = req.params;
  deleteDocumento_(id).then(msg=> {
    res.status(200).json({status : true, msg : msg})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
};


export async function getDocumento(req, res) {
  const { id } = req.params;
  getDocumento_(id).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
}