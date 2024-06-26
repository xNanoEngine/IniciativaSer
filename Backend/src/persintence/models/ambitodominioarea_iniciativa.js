import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Iniciativa } from "./Iniciativa.js";
import { ambitodominioarea } from "./ambitodominioarea.js";

export const ambitodominioarea_iniciativa = sequelize.define("ambitodominioarea_iniciativa",{
    iniciativa_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'iniciativa', // Nombre de la tabla de Estudiantes
            key: 'id', // Campo de ID de Estudiantes
        },
    },
    id_ambito_dominio_area: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'ambitodominioarea',
            key: 'id', 
        },
    },
}, {
    timestamps: true,
    freezeTableName: true
});

ambitodominioarea_iniciativa.belongsTo(Iniciativa, { foreignKey: "iniciativa_id"})
ambitodominioarea_iniciativa.belongsTo(ambitodominioarea, { foreignKey: "id_ambito_dominio_area"})

