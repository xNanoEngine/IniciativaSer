import { loggin_ } from "../persintence/repository/loggin.repository.js";
import { createToken } from "../persintence/repository/authoritation.repository.js";

export async function loggin(req, res) {
  const { username, password } = req.body;
  const cuenta = { username, password };
  try {
    const user = await loggin_(cuenta);
    const token = await createToken(user); // Generar un token JWT aquí

    res.status(200).json({ status: true, token: token });
  } catch (error) {
    res.status(400).json({ status: false, error: error.message });
  }
}
