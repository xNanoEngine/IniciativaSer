import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { ambitodominioarea } from "./ambitodominioarea.js";
import { Documento } from "./Documento.js";

export const documento_ambitodominioarea = sequelize.define("documento_ambitodominioarea",{
    documento_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'documento', // Nombre de la tabla de Estudiantes
            key: 'id', // Campo de ID de Estudiantes
        },
    },
    nombre_ambito_dominio_area: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'ambitodominioarea',
            key: 'nombre', 
        },
    },
});

documento_ambitodominioarea.belongsTo(Documento, { foreignKey: "documento_id"})
documento_ambitodominioarea.belongsTo(ambitodominioarea, { foreignKey: "nombre_ambito_dominio_area"})

