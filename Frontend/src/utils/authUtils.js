import clientAxios from "../components/config/clienteAxios";
export async function verifyToken(token) {
  try {
    const response = await clientAxios.post("/authoritation", { token });
    return response.status === 200;
  } catch (error) {
    console.error("Error al verificar token:", error);
    return false;
  }
}
