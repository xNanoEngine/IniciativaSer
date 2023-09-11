import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Iniciativa } from "./Iniciativa.js";
import { Programa } from "./Programa.js";

export const programa_iniciativa = sequelize.define("programa_inciativa",{
    iniciativa_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'iniciativa', // Nombre de la tabla de Estudiantes
            key: 'id', // Campo de ID de Estudiantes
        },
    },
    programa_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'programa',
            key: 'id', 
        },
    },
});

programa_iniciativa.belongsTo(Iniciativa, { foreignKey: "iniciativa_id"})
programa_iniciativa.belongsTo(Programa, { foreignKey: "programa_id"})

