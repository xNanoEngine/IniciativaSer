import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const PersonaJuridica = sequelize.define("persona_juridica",{
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