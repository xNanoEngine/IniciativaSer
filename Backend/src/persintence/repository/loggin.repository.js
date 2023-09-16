import bcrypt from "bcrypt";
import { Cuentas } from "../models/Cuentas.js";

// Resto de tus funciones existentes...

export async function loggin_(cuenta) {
  try {
    // Buscar al usuario en la base de datos por nombre de usuario
    const { username, password } = cuenta;
    const user = await Cuentas.findOne({ name: username });

    // Verificar si el usuario existe y la contraseÃ±a es correcta
    if (!user || !user.validPassword(password)) {
      throw new Error("Credenciales incorrectas");
    }

    return user;
  } catch (error) {
    throw error;
  }
}
