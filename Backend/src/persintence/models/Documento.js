import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

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
