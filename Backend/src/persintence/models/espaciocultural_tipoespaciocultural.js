import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { EspacioCultural } from "./EspacioCultural.js";
import { tipoespaciocultural } from "./TipoEspacioCultural.js";

export const espaciocultural_tipoespaciocultural = sequelize.define("espaciocultural_tipoespaciocultural",{
    espacio_cultural_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'espacio_cultural', 
            key: 'id', 
        },
    },
    tipo_espacio_cultural: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'tipoespaciocultural',
            key: 'tipo', 
        },
    },
});

espaciocultural_tipoespaciocultural.belongsTo(EspacioCultural, { foreignKey: "espacio_cultural_id"})
espaciocultural_tipoespaciocultural.belongsTo(tipoespaciocultural, { foreignKey: "tipo_espacio_cultural"})


