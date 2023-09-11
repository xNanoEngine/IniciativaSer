import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Documento } from "./Documento.js";
import { Iniciativa } from "./Iniciativa.js";

export const Comuna = sequelize.define("comuna",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    cantHabitantes: {
        type: DataTypes.INTEGER,
    }    
}, {
    timestamps: false,
});    

Comuna.belongsToMany(Documento, {through: 'documento_comuna'})

Comuna.belongsToMany(Iniciativa, {through: 'iniciativa_comuna'})