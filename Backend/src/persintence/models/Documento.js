import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { ambitodominioarea } from "./ambitodominioarea.js";
import { PersonaNatural } from "./PersonaNatural.js";
import { Comuna } from "./Comuna.js";


export const Documento = sequelize.define(
    "documento",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo:{
            type: DataTypes.STRING,
        },
        fecha_publicacion:{
            type: DataTypes.STRING,
        },
        enlace:{
            type: DataTypes.STRING,
        },
        materia:{
            type: DataTypes.STRING,
        },
        fuente:{
            type: DataTypes.STRING,
        },
        tipo:{
            type: DataTypes.STRING,
        },
    }, {
        timestamps: true,
        freezeTableName: true
    }
);

Documento.belongsToMany(ambitodominioarea, {through: 'documento_ambitodominioarea'})
ambitodominioarea.belongsToMany(Documento, {through: 'documento_ambitodominioarea'})

Documento.belongsToMany(PersonaNatural, {through: 'documento_personanatural'})
PersonaNatural.belongsToMany(Documento, {through: 'documento_personanatural'})

Documento.belongsToMany(Comuna, {through: 'documento_comuna'})
Comuna.belongsToMany(Documento, {through: 'documento_comuna'})