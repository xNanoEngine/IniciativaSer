import fs from 'fs/promises';

export async function leerArchivoJSON() {
    try {

      const data = await fs.readFile('SearchInitiative.json', 'utf8');
      
      const json = JSON.parse(data);
      
      return json;
    } catch (error) {
      console.error('Error al leer el archivo:', error);
    }
  }
  