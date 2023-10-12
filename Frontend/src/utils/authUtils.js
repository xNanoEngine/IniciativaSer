import clientAxios from "../components/config/clienteAxios";
import getConfigAuth from "./configToken";
export async function verifyToken(token) {
  try {
    const config = await getConfigAuth(token);
    const response = await clientAxios.post("/authoritation", {}, config);
    return response.status === 200;
  } catch (error) {
    return false;
  }
}
