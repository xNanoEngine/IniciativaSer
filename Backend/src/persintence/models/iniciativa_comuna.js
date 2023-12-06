import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Iniciativa } from "./Iniciativa.js";
import { Comuna } from "./Comuna.js";

export const iniciativa_comuna = sequelize.define("iniciativa_comuna",{
    iniciativaId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'iniciativa', 
            key: 'id', 
        },
    },
    comunaId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'comuna',
            key: 'id', 
        },
    },
}, {
    timestamps: true,
    freezeTableName: true
});

iniciativa_comuna.belongsTo(Iniciativa, { foreignKey: "iniciativaId"})
iniciativa_comuna.belongsTo(Comuna, { foreignKey: "comunaId"})


