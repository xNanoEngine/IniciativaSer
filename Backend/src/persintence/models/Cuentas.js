import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Documento } from "./Documento.js";

import bcrypt from "bcrypt";
import { Iniciativa } from "./Iniciativa.js";
export const Cuentas = sequelize.define(
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
    rol: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,

    //aplicar hash a la password
  }
);

Cuentas.afterSync(async () => {
  const usuariosPredeterminados = [
    { name: "user", password: "userS3r3mi119", rol: "seremi" },
    { name: "admin", password: "admin1122", rol: "admin" },
    {name: "nombre1", password: "password1", rol: "seremi"},
    {name: "nombre2", password: "password2", rol: "seremi"},
    {name: "nombre3", password: "password3", rol: "seremi"},
    {name: "nombre4", password: "password4", rol: "seremi"},
    {name: "nombre5", password: "password5", rol: "seremi"},
    {name: "nombre6", password: "password6", rol: "seremi"},
    {name: "nombre7", password: "password7", rol: "seremi"},
    {name: "nombre8", password: "password8", rol: "seremi"},
    {name: "nombre9", password: "password9", rol: "seremi"},
    {name: "nombre10", password: "password10", rol: "seremi"},
    {name: "nombre11", password: "password11", rol: "seremi"},
    {name: "nombre12", password: "password12", rol: "seremi"},
    {name: "nombre13", password: "password13", rol: "seremi"},
    {name: "nombre14", password: "password14", rol: "seremi"},
    {name: "nombre15", password: "password15", rol: "seremi"},
    {name: "nombre16", password: "password16", rol: "seremi"},
    {name: "nombre17", password: "password17", rol: "seremi"},
    {name: "nombre18", password: "password18", rol: "seremi"},
    {name: "nombre19", password: "password19", rol: "seremi"},
    {name: "nombre20", password: "password20", rol: "seremi"},
    {name: "nombre21", password: "password21", rol: "seremi"},
    {name: "nombre22", password: "password22", rol: "seremi"},
    {name: "nombre23", password: "password23", rol: "seremi"},
    {name: "nombre24", password: "password24", rol: "seremi"},
    {name: "nombre25", password: "password25", rol: "seremi"},
    {name: "nombre26", password: "password26", rol: "seremi"},
    {name: "nombre27", password: "password27", rol: "seremi"},
    {name: "nombre28", password: "password28", rol: "seremi"},
    {name: "nombre29", password: "password29", rol: "seremi"},
    {name: "nombre30", password: "password30", rol: "seremi"},
    {name: "nombre31", password: "password31", rol: "seremi"},
    {name: "nombre32", password: "password32", rol: "seremi"},
    {name: "nombre33", password: "password33", rol: "seremi"},
    {name: "nombre34", password: "password34", rol: "seremi"},
    {name: "nombre35", password: "password35", rol: "seremi"},
    {name: "nombre36", password: "password36", rol: "seremi"},
    {name: "nombre37", password: "password37", rol: "seremi"},
    {name: "nombre38", password: "password38", rol: "seremi"},
    {name: "nombre39", password: "password39", rol: "seremi"},
    {name: "nombre40", password: "password40", rol: "seremi"},
    {name: "nombre41", password: "password41", rol: "seremi"},
    {name: "nombre42", password: "password42", rol: "seremi"},
    {name: "nombre43", password: "password43", rol: "seremi"},
    {name: "nombre44", password: "password44", rol: "seremi"},
    {name: "nombre45", password: "password45", rol: "seremi"},
    {name: "nombre46", password: "password46", rol: "seremi"},
    {name: "nombre47", password: "password47", rol: "seremi"},
    {name: "nombre48", password: "password48", rol: "seremi"},
    {name: "nombre49", password: "password49", rol: "seremi"},
    {name: "nombre50", password: "password50", rol: "seremi"}
    

    // Puedes agregar más tipos de usuarios según sea necesario
  ];

  try {
    for (const usuario of usuariosPredeterminados) {
      const usuarioExistente = await Cuentas.findOne({
        where: { name: usuario.name },
      });

      if (!usuarioExistente) {
        const hashedPassword = await bcrypt.hash(usuario.password, 10);
        await Cuentas.create({
          name: usuario.name,
          password: hashedPassword,
          rol: usuario.rol,
        });
        console.log(`Usuario ${usuario.rol} creado automáticamente.`);
      } else {
        console.log(`El usuario ${usuario.rol} ya existe.`);
      }
    }
  } catch (error) {
    console.error("Error al crear los usuarios automáticamente:", error);
  }
});

//de esto aun no estoy seguro, asiq lo dejo en models solamente
// Cuentas.hasMany(Documento, {
//   foreinkey: "userId",
//   sourceKey: "id",
// });
// Documento.belongsTo(Cuentas, { foreinkey: "userId", targetId: "id" });

Cuentas.hasMany(Iniciativa, {
  foreinkey: "cuentaId",
  sourceKey: "id",
});
Iniciativa.belongsTo(Cuentas, { foreinkey: "cuentaId", targetId: "id" });
