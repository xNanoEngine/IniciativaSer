import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { EspacioCultural } from "./EspacioCultural.js";

export const tipoespaciocultural = sequelize.define("tipoespaciocultural",{
    tipo: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: false,
});    

tipoespaciocultural.belongsToMany(EspacioCultural, {through: 'espaciocultural_tipoespaciocultural'})