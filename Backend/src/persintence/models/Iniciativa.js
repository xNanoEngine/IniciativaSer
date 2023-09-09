import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Documento } from "./Documento.js";
import { Programa } from "./Programa.js";
import { PersonaJuridica } from "./PersonaJuridica.js";
import { ambitodominioarea } from "./ambitodominioarea.js";

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

Iniciativa.belongsToMany(Programa, {through: 'programa_iniciativa'})

Iniciativa.belongsToMany(PersonaJuridica, {through: 'personajuridica_iniciativa'})

Iniciativa.belongsToMany(ambitodominioarea, {through: 'ambitodominioarea_iniciativa'})

Iniciativa.hasMany(Documento, {
    foreinkey: "iniciativaId",
    sourceKey: "id",
});
Documento.belongsTo(Iniciativa, { foreinkey: "inciativaId", targetId: "id" });