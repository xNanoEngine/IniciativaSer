import { tokenValidator } from "../persintence/repository/authoritation.repository.js";

export async function tokenVerification(req, res) {
  let token;
  const rol = req.body.rol;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = await tokenValidator(token, rol);
      res.status(200).json({ status: true, userId: decoded.userId });
    } catch (error) {
      res.status(400).json({ status: false, error: error.message });
    }
  }
}
