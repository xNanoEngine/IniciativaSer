import fs from "fs/promises";

export async function leerArchivoJSON(file) {
  try {
    const data = await fs.readFile(file, "utf8");
    const json = JSON.parse(data);
    return json;
  } catch (error) {
    console.error("Error al leer el archivo:", error);
  }
}
