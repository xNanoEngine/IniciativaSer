import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { PersonaJuridica } from "./PersonaJuridica.js";
import { tipoespaciocultural } from "./TipoEspacioCultural.js";

export const EspacioCultural = sequelize.define("espacio_cultural",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    direccion: {
        type: DataTypes.STRING,
    },
    correo: {
        type: DataTypes.STRING,
    },
    telefono: {
        type: DataTypes.INTEGER,
    }  
}, {
    timestamps: false,
});    

EspacioCultural.belongsToMany(PersonaJuridica, {through: 'espaciocultural_personajuridica'})

EspacioCultural.belongsToMany(tipoespaciocultural, {through: 'espaciocultural_tipoespaciocultural'})