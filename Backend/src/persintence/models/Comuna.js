import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

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