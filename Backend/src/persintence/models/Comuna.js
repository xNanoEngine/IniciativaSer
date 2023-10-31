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

Comuna.afterSync(async () => {
    try {
      // Verifica si ya existe un usuario con el nombre "admin"
    const comunaExistente = await Comuna.findOne({
        where: { nombre: "Valdivia" },
    });  
    if (!comunaExistente) {
        Comuna.create({
            nombre: "Valdivia",
            cantHabitantes: 168721, // 
        });
        Comuna.create({
            nombre: "Paillaco",
            cantHabitantes: 20915, // 
        });
        console.log("datos de comuna creados automáticamente.");
    } else {
        console.log("datos de comuna ya existen.");
    }
    } catch (error) {
    console.error(
        "Error al crear el datos de comuna automáticamente:",
        error
    );
    }
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