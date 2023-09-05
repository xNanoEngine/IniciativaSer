import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Iniciativa = sequelize.define(
  "iniciativas",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    inter_id:{
      type: DataTypes.INTEGER,
    },
    tipo:{
      type: DataTypes.INTEGER,
    },
    descripcion:{
      type: DataTypes.STRING,
    },
    fecha_inicio:{
      type: DataTypes.STRING,
    },
    fecha_cierre:{
      type: DataTypes.STRING,
    },
    publico_objetivo:{
      type: DataTypes.INTEGER,
    },
    tipo_publico_objetivo:{
      type: Datatype.INTEGER,
    },
    presupuesto:{
      type: DataTypes.INTEGER,
    },
    forma_financiamiento:{
        type: DataTypes.STRING,
    },
    componente:{
      type: Datatype.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);