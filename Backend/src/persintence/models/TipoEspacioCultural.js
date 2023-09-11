import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const tipoespaciocultural = sequelize.define("tipoespaciocultural",{
    tipo: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: false,
});    

