import { Localidad_Territorio } from "../persintence/models/LocalidadTerritorio.js";
import { createLocalidadterritorio_, getLocalidadesterritorio_, updateLocalidadterritorio_, deleteLocalidadterritorio_,getLocalidadterritorio_} from "../persintence/repository/localidadterritorio.repository.js";

export async function createLocalidadterritorio(req, res) {
    const { id, nombre, tipo } = req.body;
    const localidad_territorio = { 
        id,
        nombre,
        tipo
}
    createLocalidadterritorio_(localidad_territorio).then(data => {
        res.status(200).json({status : true, data : data})
    }, error => {
        res.status(400).json({status : false, error : error.message })
    })
    
}

export async function getLocalidadesterritorio(req, res) {
    getLocalidadesterritorio_().then(data => {
        res.status(200).json({status : true, data : data})
    }, error => {
        res.status(400).json({status : false, error : error.message })
    })
}

export async function updateLocalidadterritorio(req, res) {
    const { id } = req.params;
    const { nombre, tipo } = req.body;
    const localidad_territorio = { 
        id,
        nombre,
        tipo
    }
    updateLocalidadterritorio_(localidad_territorio).then(msg=> {
        res.status(200).json({status : true, msg : msg})
    }, error => {
        res.status(400).json({status : false, error : error.message })
    })
    
    
};

export async function deleteLocalidadterritorio(req, res) {
    const { id } = req.params;
    deleteLocalidadterritorio_(id).then(msg=> {
        res.status(200).json({status : true, msg : msg})
    }, error => {
        res.status(400).json({status : false, error : error.message })
    })
};


export async function getLocalidadterritorio(req, res) {
    const { id } = req.params;
    getLocalidadterritorio_(id).then(data => {
        res.status(200).json({status : true, data : data})
    }, error => {
        res.status(400).json({status : false, error : error.message })
    })
}