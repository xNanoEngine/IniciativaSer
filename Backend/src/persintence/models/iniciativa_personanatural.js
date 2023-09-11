import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Iniciativa } from "./Iniciativa.js";
import { PersonaNatural } from "./PersonaNatural.js";

export const iniciativa_personanatural = sequelize.define("iniciativa_personanatural",{
    iniciativa_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'iniciativa', // Nombre de la tabla de Estudiantes
            key: 'id', // Campo de ID de Estudiantes
        },
    },
    persona_natural_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'personanatural',
            key: 'id', 
        },
    },
    rol_persona_natural: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

iniciativa_personanatural.belongsTo(Iniciativa, { foreignKey: "iniciativa_id"})
iniciativa_personanatural.belongsTo(PersonaNatural, { foreignKey: "persona_natural_id"})

