import jwt from "jsonwebtoken";
import { Cuentas } from "../persintence/models/Cuentas.js";
const checkAuth = async (req, res, next) => {
  let token;
  const rol = req.body.rol;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      if (rol == "seremi") {
        console.log("entre seremi 2");
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
      } else if (rol == "admin") {
        console.log("entre admin 2");
        const decoded = jwt.verify(token, process.env.JWT_SECRET_ADM);
      }
      return next();
    } catch (error) {
      return res.status(404).json({ msg: "Hubo un error" });
    }
  }

  if (!token) {
    const error = new Error("Token no valido ");
    return res.status(401).json({ msg: error.message });
  }

  next();
};

export default checkAuth;
