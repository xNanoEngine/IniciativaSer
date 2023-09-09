import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Iniciativa } from "./Iniciativa.js";
import { PersonaJuridica } from "./PersonaJuridica.js";

export const personajuridica_iniciativa = sequelize.define("personajuridica_iniciativa",{
    iniciativa_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'iniciativa', // Nombre de la tabla de Estudiantes
            key: 'id', // Campo de ID de Estudiantes
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
    rol_persona_juridica: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

personajuridica_iniciativa.belongsTo(Iniciativa, { foreignKey: "iniciativa_id"})
personajuridica_iniciativa.belongsTo(PersonaJuridica, { foreignKey: "persona_juridica_id"})

