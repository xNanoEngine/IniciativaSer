import fs from 'fs/promises';

export async function leerArchivoJSON() {
    try {
      // Lee el archivo JSON
      const data = await fs.readFile('SearchInitiative.json', 'utf8');
      
      // Parsea el JSON
      const json = JSON.parse(data);
      
      // Accede a los valores
      const ip = json.ip;
      const name = json.name;
  
      return json;
    } catch (error) {
      console.error('Error al leer el archivo:', error);
    }
  }
  