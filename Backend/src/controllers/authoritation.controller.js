import { tokenValidator } from "../persintence/repository/authoritation.repository.js";

export async function tokenVerification(req, res) {
  const { token } = req.body;
  try {
    const decoded = await tokenValidator(token);
    res.status(200).json({ status: true, userId: decoded.userId });
  } catch (error) {
    res.status(400).json({ status: false, error: error.message });
  }
}
