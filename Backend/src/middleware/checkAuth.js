import jwt from "jsonwebtoken";
const checkAuth = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.body.userRol = decoded.userRol;
      req.body.userId = decoded.userId;
      return next();
    } catch (error) {
      return res
        .status(404)
        .json({ msg: "Hubo un error, no tiene permisos o falta token" });
    }
  }

  if (!token) {
    const error = new Error("Token no valido ");
    return res.status(401).json({ msg: error.message });
  }

  next();
};

export default checkAuth;
