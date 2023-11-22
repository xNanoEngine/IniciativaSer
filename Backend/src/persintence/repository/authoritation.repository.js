import jwt from "jsonwebtoken";
export async function createToken(user) {
  const token = jwt.sign(
    { userId: user.id, userRol: user.rol },
    process.env.JWT_SECRET,
    {
      expiresIn: "8h",
    }
  );
  return token;
}
export async function tokenValidator(token) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch {
    throw new Error("Invalid Token");
  }
}
