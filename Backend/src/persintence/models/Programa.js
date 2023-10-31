import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


export const Programa = sequelize.define("programa",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    url: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: false,
    freezeTableName: true
});

const ProgramasToAdd = [
            {
                    nombre: "Acciona",
                    descripcion: "Acciona es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                    url: "http://google.com",    
                },
    
                        {
                        nombre: "CECREA",
                        descripcion: "CECREA es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                    },
                        {
                        nombre: "Comunidad Creativa Regional",
                        descripcion: "Comunidad Creativa Regional es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                    },
                        {
                        nombre: "Cultura, Memoria y DDHH",
                        descripcion: "Cultura, Memoria y DDHH es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                    },
                        {
                        nombre: "Estrategias Regionales",
                        descripcion: "Estrategias Regionales es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                    },
                        {
                        nombre: "Fondo del Arte y la Educación",
                        descripcion:  "Fondo del Arte y la Educación es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                    },
                        {
                        nombre: "Fondos concursables",
                        descripcion: "Fondos concursables es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                    },
                        {
                        nombre: "Fondos concursables Industrias Creativas",
                        descripcion: "Fondos concursables Industrias Creativas es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                    },
                        {
                        nombre: "Fortalecimiento de la Identidad Cultural",
                        descripcion: "Fortalecimiento de la Identidad Cultural es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                    },
                        {
                        nombre: "Migrantes",
                        descripcion: "Migrantes es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                    },
                        {
                        nombre: "Plan Nacional de Lectura",
                        descripcion: "Plan Nacional de Lectura es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                    },
                        {
                        nombre: "Plan Nacional de Desarrollo Artístico en la región",
                        descripcion: "Plan Nacional de Desarrollo Artístico en la región es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                    },
                        {
                        nombre: "Red Cultural",
                        descripcion: "Red Cultural es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                    },
    ];

Programa.afterSync(async () => {
        try {
        const programaExistente = await Programa.findOne({
            where: { nombre: "Acciona" },
        });  
        if (!programaExistente) {
            Programa.create({
                nombre: "Acciona",
                    descripcion: "Acciona es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                    url: "http://google.com",  
            });
            Programa.create({
                nombre: "CECREA",
                        descripcion: "CECREA es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
            });
            Programa.create({
                nombre: "Comunidad Creativa Regional",
                        descripcion: "Comunidad Creativa Regional es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
            });
            Programa.create({
                nombre: "Cultura, Memoria y DDHH",
                        descripcion: "Cultura, Memoria y DDHH es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
            });
            Programa.create({
                nombre: "Estrategias Regionales",
                        descripcion: "Estrategias Regionales es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
            });
            Programa.create({
                nombre: "Fondo del Arte y la Educación",
                        descripcion:  "Fondo del Arte y la Educación es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
            });
            Programa.create({
                nombre: "Fondos concursables",
                        descripcion: "Fondos concursables es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
            });
            Programa.create({
                nombre: "Fondos concursables Industrias Creativas",
                        descripcion: "Fondos concursables Industrias Creativas es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com",  
            });
            Programa.create({
                nombre: "Fortalecimiento de la Identidad Cultural",
                        descripcion: "Fortalecimiento de la Identidad Cultural es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
            });
            Programa.create({
                nombre: "Migrantes",
                        descripcion: "Migrantes es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
            });
            Programa.create({
                nombre: "Plan Nacional de Lectura",
                        descripcion: "Plan Nacional de Lectura es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
            });
            Programa.create({
                nombre: "Plan Nacional de Desarrollo Artístico en la región",
                        descripcion: "Plan Nacional de Desarrollo Artístico en la región es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
            });
            Programa.create({
                nombre: "Red Cultural",
                        descripcion: "Red Cultural es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
            });
            console.log("datos de programa creados automáticamente.");
        } else {
            console.log("datos de programa ya existen.");
        }
        } catch (error) {
        console.error(
            "Error al crear el datos de programa automáticamente:",
            error
        );
        }
    });

