import jwt from "jsonwebtoken";
import { Cuentas } from "../persintence/models/Cuentas.js";
const checkAuth = async (req, res, next) => {
  let token;
  console.log("Checking");
  console.log(req.headers);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      return next();
    } catch (error) {
      console.log("desde aca");
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
