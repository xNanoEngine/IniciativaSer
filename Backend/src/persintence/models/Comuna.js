import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Comuna = sequelize.define(
  "comunas",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    cant_habitantes: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);
