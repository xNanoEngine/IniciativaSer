import { tokenValidator } from "../persintence/repository/authoritation.repository.js";

export async function tokenVerification(req, res) {
  let token;
  console.log("Checking");
  console.log(req.headers);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = await tokenValidator(token);
      res.status(200).json({ status: true, userId: decoded.userId });
    } catch (error) {
      res.status(400).json({ status: false, error: error.message });
    }
  }
}
