import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Documento } from "./Documento.js";
import { Iniciativa } from "./Iniciativa.js";
import { PersonaNatural } from "./PersonaNatural.js";
import { PersonaJuridica } from "./PersonaJuridica.js";

export const ambitodominioarea = sequelize.define(
  "ambitodominioarea",
  {
    nombre :{
      type: DataTypes.STRING,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
  }
);

ambitodominioarea.belongsToMany(Iniciativa, {through: 'ambitodominioarea_iniciativa'})

ambitodominioarea.belongsToMany(Documento, {through: 'documento_ambitodominioarea'})

ambitodominioarea.belongsToMany(PersonaNatural, {through: 'ambitodominioarea_personanatural'})

ambitodominioarea.belongsToMany(PersonaJuridica, {through: 'personajuridica_ambitodominioarea'})