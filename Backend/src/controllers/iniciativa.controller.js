import { Iniciativa } from "../persintence/models/Iniciativa.js";
import { createIniciativa_, getIniciativas_, updateIniciativa_, deleteIniciativa_,getIniciativa_} from "../persintence/repository/iniciativas.repository.js";
import { createComuna_, getComunas_, updateComuna_, deleteComuna_,getComuna_} from "../persintence/repository/comunas.repository.js";

export async function createIniciativa(req, res) {
  let data1;
  let data2;
  const { Iniciativa_id, Iniciativa_idInterno, Iniciativa_nombre, Iniciativa_tipo, Iniciativa_descripcion, Iniciativa_componente, Iniciativa_presupuesto, Iniciativa_formaFinanciamiento, Iniciativa_tipoPublicoObjetivo, Iniciativa_cantPublico, Iniciativa_fechaInicio, Iniciativa_fechaFin, 
    Comuna_id, Comuna_nombre, Comuna_cantHabitantes
  } = req.body;
  const Iniciativa_ = {
    id : Iniciativa_id,
    idInterno : Iniciativa_idInterno,
    nombre : Iniciativa_nombre,
    tipo: Iniciativa_tipo,
    descripcion: Iniciativa_descripcion,
    componente: Iniciativa_componente,
    presupuesto : Iniciativa_presupuesto,
    formaFinanciamiento: Iniciativa_formaFinanciamiento, 
    tipoPublicoObjetivo: Iniciativa_tipoPublicoObjetivo,
    cantPublico: Iniciativa_cantPublico,
    fechaInicio: Iniciativa_fechaInicio,
    fechaFin : Iniciativa_fechaFin,
  }

  const Comuna_ = {
    id : Comuna_id,
    nombre : Comuna_nombre,
    cantHabitantes : Comuna_cantHabitantes,
  }
  try {

    createIniciativa_(Iniciativa_).then(data => {
      data1 = data
      // res.status(200).json({status : true, data : data})
    }, error => {
      res.status(400).json({status : false, error1 : error.message })
    })
    createComuna_(Comuna_).then(data => {
      data2 = data
    // res.status(200).json({status : true, data : data})
    }, error => {
      res.status(400).json({status : false, error2 : error.message })
    })

    res.status(200).json({status : true, data1 : data1, data2: data2})
    
  } catch (error) {
    res.status(400).json({status : false, error : error.message })
  }


  
  
  // createComuna_(Comuna_).then(data => {
  //   res.status(200).json({status : true, data : data})
  // }, error => {
  //   res.status(400).json({status : false, error : error.message })
  // })
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