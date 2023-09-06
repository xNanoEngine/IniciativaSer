import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Programa } from "./Programa.js";

export const PersonaJuridica = sequelize.define("persona_juridica",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    rut: {
        type: DataTypes.STRING,
    },
    tipo: {
        type: DataTypes.STRING,
    },
    url: {
        type: DataTypes.STRING,
    },
    telefono: {
        type: DataTypes.INTEGER,
    },
    IG: {
        type: DataTypes.STRING,
    },
    correo: {
        type: DataTypes.STRING,
    }    
}, {
    timestamps: false,
});    

PersonaJuridica.hasMany(Programa, { foreinkey: "personaId", targetId: "id" })
Programa.belongsTo(PersonaJuridica, { foreinkey: "personaId", targetId: "id" })
