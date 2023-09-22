import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Documento } from "./Documento.js";
import { Programa } from "./Programa.js";
import { PersonaJuridica } from "./PersonaJuridica.js";
import { ambitodominioarea } from "./ambitodominioarea.js";
import { PersonaNatural } from "./PersonaNatural.js";
import { Comuna } from "./Comuna.js";
import { Localidad_Territorio } from "./LocalidadTerritorio.js";
import { Objetivo } from "./Objetivo.js";

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
    freezeTableName: true
});

Iniciativa.belongsToMany(Programa, {through: 'programa_iniciativa'})
Programa.belongsToMany(Iniciativa, {through: 'programa_iniciativa'})

Iniciativa.belongsToMany(PersonaJuridica, {through: 'personajuridica_iniciativa'})
PersonaJuridica.belongsToMany(Iniciativa, {through: 'personajuridica_iniciativa'})

Iniciativa.belongsToMany(ambitodominioarea, {through: 'ambitodominioarea_iniciativa'})
ambitodominioarea.belongsToMany(Iniciativa, {through: 'ambitodominioarea_iniciativa'})

Iniciativa.belongsToMany(PersonaNatural, {through: 'iniciativa_personanatural'})
PersonaNatural.belongsToMany(Iniciativa, {through: 'iniciativa_personanatural'})

Iniciativa.belongsToMany(Comuna, {through: 'iniciativa_comuna'})
Comuna.belongsToMany(Iniciativa, {through: 'iniciativa_comuna'})

Iniciativa.belongsToMany(Localidad_Territorio, {through: 'localidadterritorio_iniciativa'})
Localidad_Territorio.belongsToMany(Iniciativa, {through: 'localidadterritorio_iniciativa'})

Iniciativa.belongsToMany(Objetivo, {through: 'objetivo_iniciativa'})
Objetivo.belongsToMany(Iniciativa, {through: 'objetivo_iniciativa'})

Iniciativa.hasMany(Documento, {
    foreinkey: "iniciativaId",
    sourceKey: "id",
});
Documento.belongsTo(Iniciativa, { foreinkey: "inciativaId", targetId: "id" });