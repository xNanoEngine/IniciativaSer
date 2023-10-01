import jwt from "jsonwebtoken";
export async function createToken(user) {
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
}
export async function tokenValidator(token) {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
}
