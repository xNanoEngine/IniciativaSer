import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { ambitodominioarea } from "./ambitodominioarea.js";
import { PersonaNatural } from "./PersonaNatural.js";
import { Comuna } from "./Comuna.js";


export const Documento = sequelize.define(
    "documentos",
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
    },
    {
        timestamps: false,
    }
);

Documento.belongsToMany(ambitodominioarea, {through: 'documento_ambitodominioarea'})

Documento.belongsToMany(PersonaNatural, {through: 'documento_personanatural'})=

Documento.belongsToMany(Comuna, {through: 'documento_comuna'})