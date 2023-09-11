import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
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



EspacioCultural.belongsToMany(tipoespaciocultural, {through: 'espaciocultural_tipoespaciocultural'})
tipoespaciocultural.belongsToMany(EspacioCultural, {through: 'espaciocultural_tipoespaciocultural'})