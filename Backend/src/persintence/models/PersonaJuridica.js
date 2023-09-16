import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Programa } from "./Programa.js";
//import { depende_de } from "./depende_de.js";
import { ambitodominioarea } from "./ambitodominioarea.js";
import { EspacioCultural } from "./EspacioCultural.js";

export const PersonaJuridica = sequelize.define("persona_juridica",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    rut: {
        type: DataTypes.STRING,
    },
    tipo: {
        type: DataTypes.STRING,
    },
    url: {
        type: DataTypes.STRING,
    },
    telefono: {
        type: DataTypes.INTEGER,
    },
    IG: {
        type: DataTypes.STRING,
    },
    correo: {
        type: DataTypes.STRING,
    }    
}, {
    timestamps: false,
    freezeTableName: true
});    

//PersonaJuridica.belongsToMany(PersonaJuridica, { through: 'depende_de' , foreignKey: 'id_personajuridicaEncargada', otherKey: 'id_personajuridicaNormal'});
PersonaJuridica.belongsToMany(PersonaJuridica, { as: 'Dependencias', through: 'depende_de', foreignKey: 'id_personajuridicaEncargada', otherKey: 'id_personajuridicaNormal' });

PersonaJuridica.belongsToMany(ambitodominioarea, {through: 'personajuridica_ambitodominioarea'})
ambitodominioarea.belongsToMany(PersonaJuridica, {through: 'personajuridica_ambitodominioarea'})

PersonaJuridica.belongsToMany(EspacioCultural, {through: 'espaciocultural_personajuridica'})
EspacioCultural.belongsToMany(PersonaJuridica, {through: 'espaciocultural_personajuridica'})

PersonaJuridica.hasMany(Programa, { foreinkey: "personaId", targetId: "id" })
Programa.belongsTo(PersonaJuridica, { foreinkey: "personaId", targetId: "id" })
