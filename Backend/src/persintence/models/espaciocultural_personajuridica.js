import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { EspacioCultural } from "./EspacioCultural.js";
import { PersonaJuridica } from "./PersonaJuridica.js";

export const espaciocultural_personajuridica = sequelize.define("espaciocultural_personajuridica",{
    espacio_cultural_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'espacio_cultural', 
            key: 'id', 
        },
    },
    persona_juridica_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'persona_juridica',
            key: 'id', 
        },
    },
});

espaciocultural_personajuridica.belongsTo(EspacioCultural, { foreignKey: "espacio_cultural_id"})
espaciocultural_personajuridica.belongsTo(PersonaJuridica, { foreignKey: "persona_juridica_id"})


