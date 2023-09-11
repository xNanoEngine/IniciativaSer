import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Iniciativa } from "./Iniciativa.js";

export const Localidad_Territorio = sequelize.define(
  "localidad_territorios",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    tipo: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

Localidad_Territorio.belongsToMany(Iniciativa, {through: 'localidadterritorio_iniciativa'})
