import clientAxios from "../components/config/clienteAxios";
import getConfigAuth from "./configToken";
export async function verifyToken(token) {
  try {
    const config = await getConfigAuth(token);
    console.log(config);
    const response = await clientAxios.post("/authoritation", {}, config);
    return response.status === 200;
  } catch (error) {
    console.error("Error al verificar token:", error);
    return false;
  }
}
