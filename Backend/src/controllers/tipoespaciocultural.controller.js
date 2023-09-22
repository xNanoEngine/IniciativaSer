import { tipoespaciocultural } from "../persintence/models/TipoEspacioCultural.js";
import { createTipoespaciocultural_, getTiposespaciocultural_, updateTipoespaciocultural_, deleteTipoespaciocultural_,getTipoespaciocultural_} from "../persintence/repository/tipoespaciocultural.repository.js";

export async function createTipoespaciocultural(req, res) {
  const { tipo } = req.body;
  const tipoespaciocultural = { 
    tipo
  }
  createTipoespaciocultural_(tipoespaciocultural).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
}

export async function getTiposespaciocultural(req, res) {
  getTiposespaciocultural_().then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
}

export async function updateTipoespaciocultural(req, res) {
 
    const { tipo } = req.params;
    const tipoespaciocultural = { 
      tipo
    }
    updateTipoespaciocultural_(tipoespaciocultural).then(msg=> {
      res.status(200).json({status : true, msg : msg})
    }, error => {
      res.status(400).json({status : false, error : error.message })
    })
    
    
};

export async function deleteTipoespaciocultural(req, res) {
  const { tipo } = req.params;
  deleteTipoespaciocultural_(tipo).then(msg=> {
    res.status(200).json({status : true, msg : msg})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
};


export async function getTipoespaciocultural(req, res) {
  const { tipo } = req.params;
  getTipoespaciocultural_(tipo).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
}