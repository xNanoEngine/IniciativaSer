import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { EspacioCultural } from "./EspacioCultural.js";
import { Localidad_Territorio } from "./LocalidadTerritorio.js";
import { PersonaJuridica } from "./PersonaJuridica.js";
import { PersonaNatural } from "./PersonaNatural.js";

export const Comuna = sequelize.define("comuna",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    cantHabitantes: {
        type: DataTypes.INTEGER,
    }    
}, {
    timestamps: true,
    freezeTableName: true
});    

const ComunaToAdd = [
    {
        nombre: "Valdivia",
        cantHabitantes: 168721, // 
    },
    {
        nombre: "Paillaco",
        cantHabitantes: 20915, // 
},
];

Comuna.bulkCreate(ComunaToAdd).then(() => {
    console.log('Registros creados exitosamente');
    }).catch((error) => {
    console.error('Error al crear registros:', error);
});    

Comuna.hasMany(EspacioCultural, {
    foreinkey: "comunaId",
    sourceKey: "id",
});

Comuna.hasMany(PersonaJuridica, {
    foreinkey: "comunaId",
    sourceKey: "id",
});

Comuna.hasMany(PersonaNatural, {
    foreinkey: "comunaId",
    sourceKey: "id",
});

Comuna.hasMany(Localidad_Territorio, {
    foreinkey: "comunaId",
    sourceKey: "id",
});