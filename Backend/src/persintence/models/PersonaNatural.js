import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Iniciativa } from "./Iniciativa.js";
import { ambitodominioarea } from "./ambitodominioarea.js";
import { Documento } from "./Documento.js";

export const PersonaNatural = sequelize.define(
  "personanatural",
  {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rut:{
      type: DataTypes.STRING,
    },
    ig:{
      type: DataTypes.STRING,
    },
    sitio_web:{
      type: DataTypes.STRING,
    },
    nombre:{
      type: DataTypes.STRING,
    },
    correo:{
      type: DataTypes.STRING,
    },
    telefono:{
      type: DataTypes.INTEGER,
    },
    apellido:{
      type: DataTypes.STRING,
    },
    genero:{
      type: DataTypes.STRING,
    },
    pais_origen:{
      type: DataTypes.STRING,
    },
    pueblo_originario:{
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

PersonaNatural.belongsToMany(Iniciativa, {through: 'iniciativa_personanatural'})

PersonaNatural.belongsToMany(ambitodominioarea, {through: 'ambitodominioarea_personanatural'})

PersonaNatural.belongsToMany(Documento, {through: 'documento_personanatural'})