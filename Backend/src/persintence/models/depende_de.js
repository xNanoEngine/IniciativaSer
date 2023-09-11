import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { PersonaJuridica } from "./PersonaJuridica.js";

export const depende_de = sequelize.define("depende_de",{
    id_personajuridicaEncargada: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'persona_juridica',
            key: 'id',
        },
    },
    id_personajuridicaNormal: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'persona_juridica',
            key: 'id', 
        },
    },
});

//depende_de.belongsTo(PersonaJuridica, { foreignKey: "id_personajuridicaEncargada"})
//depende_de.belongsTo(PersonaJuridica, { foreignKey: "id_personajuridicaNormal"})
