import { EspacioCultural } from "../persintence/models/EspacioCultural.js";
import { createEspacioCultural_, getEspaciosCulturales_, updateEspacioCultural_, deleteEspacioCultural_,getEspacioCultural_} from "../persintence/repository/espaciocultural.repository.js";

export async function createEspacioCultural(req, res) {
    const { id, nombre, direccion, correo, telefono } = req.body;
    const espacio_cultural = { 
        id, 
        nombre, 
        direccion, 
        correo, 
        telefono
    }
    createEspacioCultural_(espacio_cultural).then(data => {
        res.status(200).json({status : true, data : data})
    }, error => {
        res.status(400).json({status : false, error : error.message })
    })
    
}

export async function getEspaciosCulturales(req, res) {
    getEspaciosCulturales_().then(data => {
        res.status(200).json({status : true, data : data})
    }, error => {
        res.status(400).json({status : false, error : error.message })
    })
}

export async function updateEspacioCultural(req, res) {

    const { id } = req.params;
    const { nombre, direccion, correo, telefono } = req.body;
    const espacio_cultural = { 
        id, 
        nombre, 
        direccion, 
        correo, 
        telefono
    }
    updateEspacioCultural_(espacio_cultural).then(msg=> {
        res.status(200).json({status : true, msg : msg})
    }, error => {
        res.status(400).json({status : false, error : error.message })
    })
    
    
};

export async function deleteEspacioCultural(req, res) {
    const { id } = req.params;
    deleteEspacioCultural_(id).then(msg=> {
        res.status(200).json({status : true, msg : msg})
    }, error => {
        res.status(400).json({status : false, error : error.message })
    })
    
};


export async function getEspacioCultural(req, res) {
    const { id } = req.params;
    getEspacioCultural_(id).then(data => {
        res.status(200).json({status : true, data : data})
    }, error => {
        res.status(400).json({status : false, error : error.message })
    })
}