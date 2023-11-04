import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const ambitodominioarea = sequelize.define(
  "ambitodominioarea",
  {
    id :{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre :{
      type: DataTypes.STRING,
    },
  }, {
    timestamps: true,
    freezeTableName: true
}
);

const AreasToAdd = [
  { name: "Arquitectura" },
  { name: "Artes de la visualidad" },
  { name: "Artes Escénicas" },
  { name: "Artesanía" },
  { name: "Audiovisual" },
  { name: "Comunicación y medios" },
  { name: "Cultura Comunitaria" },
  { name: "Cultura y Patrimonio Migrante" },
  { name: "Diseño" },
  { name: "Gestión Cultural" },
  { name: "Libro / Lectura" },
  { name: "Memoria Histórica y DDHH" },
  { name: "Música" },
  { name: "Patrimonio Cultural" },
  { name: "Patrimonio Cultural Indígena/Afrodescendiente" },
  { name: "Patrimonio Cultural Inmaterial" },
  { name: "Patrimonio Cultural Material" },
  { name: "Patrimonio Natural" },
];

ambitodominioarea.afterSync(async () => {
  try {
    const ambitoExistente = await ambitodominioarea.findOne({
      where: { nombre: "Arquitectura"},
    });
    if (!ambitoExistente){
      ambitodominioarea.create({
        nombre: "Arquitectura",
      });
      ambitodominioarea.create({
        nombre: "Artes de la visualidad",
      });
      ambitodominioarea.create({
        nombre: "Artes Escénicas",
      });
      ambitodominioarea.create({
        nombre: "Artesanía",
      });
      ambitodominioarea.create({
        nombre: "Audiovisual",
      });
      ambitodominioarea.create({
        nombre: "Comunicación y medios",
      });
      ambitodominioarea.create({
        nombre: "Cultura Comunitaria",
      });
      ambitodominioarea.create({
        nombre: "Cultura y Patrimonio Migrante",
      });
      ambitodominioarea.create({
        nombre: "Diseño",
      });
      ambitodominioarea.create({
        nombre: "Gestión Cultural",
      });
      ambitodominioarea.create({
        nombre: "Libro / Lectura",
      });
      ambitodominioarea.create({
        nombre: "Memoria Histórica y DDHH",
      });
      ambitodominioarea.create({
        nombre: "Música",
      });
      ambitodominioarea.create({
        nombre: "Patrimonio Cultural",
      });
      ambitodominioarea.create({
        nombre: "Patrimonio Cultural Indígena/Afrodescendiente",
      });
      ambitodominioarea.create({
        nombre: "Patrimonio Cultural Inmaterial",
      });
      ambitodominioarea.create({
        nombre: "Patrimonio Cultural Material",
      });
      ambitodominioarea.create({
        nombre: "Patrimonio Natural",
      });
      console.log("datos de ambito creados automáticamente");
    } else {
      console.log("datos de ambito ya existen");
    }
  } catch (error){
    console.error(
      "Error al crear los datos de ambito automaticamente",
      error
    );
  }
});