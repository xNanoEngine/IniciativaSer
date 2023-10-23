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
  },
  {
    timestamps: false,
    freezeTableName: true,

    //aplicar hash a la password
  }
);

Cuentas.afterSync(async () => {
  const nombreUsuario = "user";
  const contraseñaUsuario = "userS3r3mi119";

  try {
    // Verifica si ya existe un usuario con el nombre "admin"
    const usuarioExistente = await Cuentas.findOne({
      where: { name: nombreUsuario },
    });

    if (!usuarioExistente) {
      // Si no existe, crea el usuario
      const hashedPassword = await bcrypt.hash(contraseñaUsuario, 10);
      await Cuentas.create({
        name: nombreUsuario,
        password: hashedPassword,
      });
      console.log("Usuario administrador creado automáticamente.");
    } else {
      console.log("El usuario administrador ya existe.");
    }
  } catch (error) {
    console.error(
      "Error al crear el usuario administrador automáticamente:",
      error
    );
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