import { ambitodominioarea } from "../persintence/models/ambitodominioarea.js";
import { createambitodominioarea_, getambitodominioareas_, deleteambitodominioarea_,getambitodominioarea_} from "../persintence/repository/ambitodominioareas.repository.js";

export async function createambitodominioarea(req, res) {
  const { nombre} = req.body;
  const ambitodominioarea = { 
    nombre
  }
  createambitodominioarea_(ambitodominioarea).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
}

export async function getambitodominioareas(req, res) {
  getambitodominioareas_().then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
}

export async function deleteambitodominioarea(req, res) {
  const { nombre } = req.params;
  deleteambitodominioarea_(nombre).then(msg=> {
    res.status(200).json({status : true, msg : msg})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
};


export async function getambitodominioarea(req, res) {
  const { nombre } = req.params;
  getambitodominioarea_(nombre).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
}