import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Iniciativa } from "./Iniciativa.js";
import { Objetivo } from "./Objetivo.js";

export const objetivo_iniciativa = sequelize.define("objetivo_iniciativa",{
    iniciativa_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'iniciativa', 
            key: 'id', 
        },
    },
    objetivo_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'objetivo',
            key: 'id', 
        },
    },
}, {
    timestamps: false,
    freezeTableName: true
});

objetivo_iniciativa.belongsTo(Iniciativa, { foreignKey: "iniciativa_id"})
objetivo_iniciativa.belongsTo(Objetivo, { foreignKey: "objetivo_id"})


