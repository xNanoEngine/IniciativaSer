import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Iniciativa } from "./Iniciativa.js";
import { Programa } from "./Programa.js";

export const programa_iniciativa = sequelize.define("programa_iniciativa",{
    iniciativaId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'iniciativa', // Nombre de la tabla de Estudiantes
            key: 'id', // Campo de ID de Estudiantes
        },
    },
    programaId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'programa',
            key: 'id', 
        },
    },
}, {
    timestamps: true,
    freezeTableName: true
});

programa_iniciativa.belongsTo(Iniciativa, { foreignKey: "iniciativaId"})
programa_iniciativa.belongsTo(Programa, { foreignKey: "programaId"})

