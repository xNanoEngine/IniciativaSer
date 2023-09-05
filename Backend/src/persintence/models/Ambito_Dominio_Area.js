import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Ambito = sequelize.define(
  "ambitos",
  {
    nombre:{
      type: DataTypes.STRING,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
  }
);