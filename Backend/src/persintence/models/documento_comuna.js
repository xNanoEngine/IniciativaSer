import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Documento } from "./Documento.js";
import { Comuna } from "./Comuna.js";

export const documento_comuna = sequelize.define("documento_comuna",{
    documento_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'documento', 
            key: 'id', 
        },
    },
    comuna_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'comuna',
            key: 'id', 
        },
    },
});

documento_comuna.belongsTo(Documento, { foreignKey: "documento_id"})
documento_comuna.belongsTo(Comuna, { foreignKey: "comuna_id"})


