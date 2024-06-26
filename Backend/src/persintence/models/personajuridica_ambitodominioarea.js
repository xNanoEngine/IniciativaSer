import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { ambitodominioarea } from "./ambitodominioarea.js";
import { PersonaJuridica } from "./PersonaJuridica.js";

export const personajuridica_ambitodominioarea = sequelize.define("personajuridica_ambitodominioarea",{
    persona_juridica_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'personajuridica', 
            key: 'id',
        },
    },
    id_ambito_dominio_area: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'ambitodominioarea',
            key: 'id', 
        },
    },
}, {
    timestamps: false,
    freezeTableName: true
});

personajuridica_ambitodominioarea.belongsTo(PersonaJuridica, { foreignKey: "persona_juridica_id"})
personajuridica_ambitodominioarea.belongsTo(ambitodominioarea, { foreignKey: "nombre_ambito_dominio_area"})

