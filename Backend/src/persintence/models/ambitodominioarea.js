import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const ambitodominioarea = sequelize.define(
  "ambitodominioarea",
  {
    nombre :{
      type: DataTypes.STRING,
      primaryKey: true,
    },
  }, {
    timestamps: true,
    freezeTableName: true
}
);



