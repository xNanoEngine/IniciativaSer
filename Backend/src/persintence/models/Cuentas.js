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
