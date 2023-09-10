import { Cuentas } from "../models/Cuentas.js";

export async function getAccouts_(){
    try {
        const cuentas = await Cuentas.findAll({
          atributes: ["id", "name", "password"],
        });



        return cuentas
      } catch (error) {
        
        throw new Error("Error")
        
      }
}

export async function createAccounts_(cuentas){
    const { name, password } = cuentas;
    try{ 
        let newAccount = await Cuentas.create(
            {
            name,
            password,
            },
            {
            fields: ["name", "password"],
            }
        );
      return newAccount
    } catch (error) {
        throw new Error("Error...")
    }
    

}


export async function getAccount_(id){
    try {
        const cuenta = await Cuentas.findOne({
          where: {
            id,
          },
        });
        return cuenta
      } catch (error) {
        throw new Error("Error...")
      }
}

export async function updateAccount_(cuentas){
    const {id, name, password} = cuentas 
    try {
        const cuentas = await Cuentas.findByPk(id);
        cuentas.name = name;
        cuentas.password = password;
        await cuentas.save();
        return "Usuario Modificado"
    } catch (error) {
        throw new Error("Error...")
    }
}

export async function deleteAccount_(id){
    try {
        await Cuentas.destroy({
            where: {
            id,
        },
        });
        return "Se elimino el usuario correctamente.. "
    } catch (error) {
        throw new Error("Error...")
    }
}