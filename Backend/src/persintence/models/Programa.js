import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Iniciativa } from "./Iniciativa.js";

export const Programa = sequelize.define("programa",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    url: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: false,
});

Programa.belongsToMany(Iniciativa, {through: 'programa_iniciativa'})
