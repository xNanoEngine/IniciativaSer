import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Documento } from "./Documento.js";

export const Iniciativa = sequelize.define("iniciativa",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idInterno: {
        type: DataTypes.INTEGER,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    tipo: {
        type: DataTypes.STRING,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    componente: {
        type: DataTypes.STRING,
    },
    presupuesto: {
        type: DataTypes.INTEGER,
    },
    formaFinanciamiento: {
        type: DataTypes.STRING,
    },
    tipoPublicoObjetivo: {
        type: DataTypes.STRING,
    },
    cantPublico:{
        type: DataTypes.INTEGER,
    },
    fechaInicio: {
        type: DataTypes.DATE,
    },
    fechaFin: {
        type: DataTypes.DATE,
    }
    
}, {
    timestamps: false,
});

Iniciativa.hasMany(Documento, {
    foreinkey: "iniciativaId",
    sourceKey: "id",
});
Documento.belongsTo(Iniciativa, { foreinkey: "inciativaId", targetId: "id" });