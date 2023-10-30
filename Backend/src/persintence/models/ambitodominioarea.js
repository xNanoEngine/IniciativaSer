import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const ambitodominioarea = sequelize.define(
  "ambitodominioarea",
  {
    id :{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre :{
      type: DataTypes.STRING,
    },
  }, {
    timestamps: true,
    freezeTableName: true
}
);



