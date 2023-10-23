import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Localidad_Territorio = sequelize.define(
  "localidad_territorio",
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
  }, {
    timestamps: false,
    freezeTableName: true
}
);


