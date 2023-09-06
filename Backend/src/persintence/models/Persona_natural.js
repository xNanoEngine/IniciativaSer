import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Persona_Natural = sequelize.define(
  "persona_naturals",
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
      type: DataTypes.???,
    },
    sitio_web:{
      type: DataTypes.???,
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