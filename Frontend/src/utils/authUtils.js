import clientAxios from "../components/config/clienteAxios";
import getConfigAuth from "./configToken";
export async function verifyToken(token, rol) {
  try {
    const config = await getConfigAuth(token);
    const response = await clientAxios.post("/authoritation", { rol }, config);
    return response.status === 200;
  } catch (error) {
    return false;
  }
}
