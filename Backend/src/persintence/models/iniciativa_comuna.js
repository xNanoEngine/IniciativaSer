import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Iniciativa } from "./Iniciativa.js";
import { Comuna } from "./Comuna.js";

export const iniciativa_comuna = sequelize.define("iniciativa_comuna",{
    iniciativa_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'iniciativa', 
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

iniciativa_comuna.belongsTo(Iniciativa, { foreignKey: "iniciativa_id"})
iniciativa_comuna.belongsTo(Comuna, { foreignKey: "comuna_id"})


