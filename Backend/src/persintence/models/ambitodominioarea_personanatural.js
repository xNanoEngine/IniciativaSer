import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { ambitodominioarea } from "./ambitodominioarea.js";
import { PersonaNatural } from "./PersonaNatural.js";

export const ambitodominioarea_personanatural = sequelize.define("ambitodominioarea_personanatural",{
    persona_natural_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'personanatural', 
            key: 'id',
        },
    },
    nombre_ambito_dominio_area: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'ambitodominioarea',
            key: 'nombre', 
        },
    },
}, {
    timestamps: false,
    freezeTableName: true
});

ambitodominioarea_personanatural.belongsTo(PersonaNatural, { foreignKey: "persona_natural_id"})
ambitodominioarea_personanatural.belongsTo(ambitodominioarea, { foreignKey: "nombre_ambito_dominio_area"})

