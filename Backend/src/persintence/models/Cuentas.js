import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Documento } from "./Documento.js"

import bcrypt from 'bcrypt';


export  const Cuentas = sequelize.define(
  "cuentas",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
    
    //aplicar hash a la password
    instanceMethods: {
        generateHash(password){
            return bcrypt.hash(password, bcrypt.genSaltSync(8));
        },
        validPassword(password) {
            return bcrypt.compare(password, this.password);
        }
    }
  }
);

// de esto aun no estoy seguro, asiq lo dejo en models solamente
Cuentas.hasMany(Documento, {
  foreinkey: "userId",
  sourceKey: "id",
});
Documento.belongsTo(Cuentas, { foreinkey: "userId", targetId: "id" });