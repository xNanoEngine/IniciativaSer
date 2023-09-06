import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const PersonaJuridica = sequelize.define("persona_juridica",{
    tipo: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: false,
});    