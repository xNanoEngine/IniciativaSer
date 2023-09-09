import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Iniciativa } from "./Iniciativa.js";
import { Localidad_Territorio } from "./LocalidadTerritorio.js";

export const localidadterritorio_iniciativa = sequelize.define("localidadterritorio_iniciativa",{
    iniciativa_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'iniciativa', 
            key: 'id', 
        },
    },
    localidad_territorio_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'localidad_territorios',
            key: 'id', 
        },
    },
});

localidadterritorio_iniciativa.belongsTo(Iniciativa, { foreignKey: "iniciativa_id"})
localidadterritorio_iniciativa.belongsTo(Localidad_Territorio, { foreignKey: "localidad_territorio_id"})


