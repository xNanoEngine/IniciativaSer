import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


export const Objetivo = sequelize.define("objetivo",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_objetivo: {
        type: DataTypes.STRING,
    },
    numero: {
        type: DataTypes.INTEGER,
    },
    nivel: {
        type: DataTypes.INTEGER,
    },},
    {
    timestamps: false,
    }
);


