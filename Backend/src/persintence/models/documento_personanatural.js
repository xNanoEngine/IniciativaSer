import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Documento } from "./Documento.js";
import { PersonaNatural } from "./PersonaNatural.js";

export const documento_personanatural = sequelize.define("documento_personanatural",{
    documento_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'documento', // Nombre de la tabla de Estudiantes
            key: 'id', // Campo de ID de Estudiantes
        },
    },
    persona_natural_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'personanatural',
            key: 'id', 
        },
    },
}, {
    timestamps: false,
    freezeTableName: true
});

documento_personanatural.belongsTo(Documento, { foreignKey: "documento_id"})
documento_personanatural.belongsTo(PersonaNatural, { foreignKey: "persona_natural_id"})

