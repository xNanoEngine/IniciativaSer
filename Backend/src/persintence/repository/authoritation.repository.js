import jwt from "jsonwebtoken";
export async function createToken(user) {
  if (user.rol == "seremi") {
    const token = jwt.sign(
      { userId: user.id, userRol: user.rol },
      process.env.JWT_SECRET,
      {
        expiresIn: "8h",
      }
    );
    return token;
  } else if (user.rol == "admin") {
    const token = jwt.sign(
      { userId: user.id, userRol: user.rol },
      process.env.JWT_SECRET_ADM,
      {
        expiresIn: "8h",
      }
    );
    return token;
  } else {
    throw new Error("Invalid Rol");
  }
}
export async function tokenValidator(token, rol) {
  if (rol == "seremi") {
    console.log("entre seremi");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } else if (rol == "admin") {
    console.log("entre admin");
    const decoded = jwt.verify(token, process.env.JWT_SECRET_ADM);
    return decoded;
  } else {
    throw new Error("Invalid Token");
  }
}
