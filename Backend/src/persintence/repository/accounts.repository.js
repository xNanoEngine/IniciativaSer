import { Cuentas } from "../models/Cuentas.js";
import bcrypt from "bcrypt";

export async function getAccouts_() {
  try {
    const cuentas = await Cuentas.findAll({
      atributes: ["id", "name", "password"],
    });

    return cuentas;
  } catch (error) {
    throw new Error("Error");
  }
}

export async function createAccounts_(cuentas) {
  const { name, password } = cuentas;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    let newAccount = await Cuentas.create(
      {
        name,
        password: hashedPassword,
      },
      {
        fields: ["name", "password"],
      }
    );

    return newAccount;
  } catch (error) {
    throw new Error("Error...");
  }
}

export async function getAccount_(id) {
  try {
    const cuenta = await Cuentas.findOne({
      where: {
        id,
      },
    });
    return cuenta;
  } catch (error) {
    throw new Error("Error...");
  }
}

export async function updateAccount_(cuentas) {
  const { id, name, password } = cuentas;
  try {
    const cuentas = await Cuentas.findByPk(id);
    cuentas.name = name;
    cuentas.password = password;
    await cuentas.save();
    return "Usuario Modificado";
  } catch (error) {
    throw new Error("Error...");
  }
}

export async function deleteAccount_(id) {
  try {
    await Cuentas.destroy({
      where: {
        id,
      },
    });
    return "Se elimino el usuario correctamente.. ";
  } catch (error) {
    throw new Error("Error...");
  }
}
export async function login_(cuenta) {
  try {
    const { name, password } = cuenta;
    console.log(name);
    const user = await Cuentas.findOne({ where: { name: name } });

    if (!user) {
      console.log("Usuario no encontrado");
      throw new Error("Credenciales incorrectas");
    }

    // Compara la contraseña proporcionada con la contraseña encriptada del usuario
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.log("Contraseña incorrecta");
      throw new Error("Credenciales incorrectas");
    }

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}