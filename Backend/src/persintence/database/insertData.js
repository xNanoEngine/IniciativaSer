import { createInitiative } from "../repository/initiatives.repository.js";
import fs from "fs/promises";

export async function leerArchivoJSON() {
  try {
    const data = await fs.readFile(
      "./src/persintence/database/DataSample.json",
      "utf8"
    );
    const json = JSON.parse(data);
    return json;
  } catch (error) {
    console.error("Error al leer el archivo:", error);
  }
}
export async function insertarData() {
  const data = await leerArchivoJSON();
  data.forEach(async (element) => {
    createInitiative(element);
  });
  console.log(data);
}
