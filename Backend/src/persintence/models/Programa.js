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
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    timestamps: false,
    freezeTableName: true
});

const ProgramasToAdd = [
            {
                    nombre: "Acciona",
                    descripcion: "Acciona es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                    url: "http://google.com",   
                    imagen:"https://res.cloudinary.com/de74rjdry/image/upload/v1702156749/1_c7hpcf.jpg", 
                },
    
                        {
                        nombre: "CECREA",
                        descripcion: "CECREA es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                        imagen:"https://res.cloudinary.com/de74rjdry/image/upload/v1702156749/2_da8nde.jpg", 
                    },
                        {
                        nombre: "Comunidad Creativa Regional",
                        descripcion: "Comunidad Creativa Regional es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                        imagen:"https://res.cloudinary.com/de74rjdry/image/upload/v1702156749/3_emhqmz.jpg", 
                    },
                        {
                        nombre: "Cultura, Memoria y DDHH",
                        descripcion: "Cultura, Memoria y DDHH es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                        imagen:"https://res.cloudinary.com/de74rjdry/image/upload/v1702156749/4_wgpq7d.jpg", 
                    },
                        {
                        nombre: "Estrategias Regionales",
                        descripcion: "Estrategias Regionales es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                        imagen:"https://res.cloudinary.com/de74rjdry/image/upload/v1702156750/5_zgietg.jpg", 
                    },
                        {
                        nombre: "Fondo del Arte y la Educación",
                        descripcion:  "Fondo del Arte y la Educación es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                        imagen:"https://res.cloudinary.com/de74rjdry/image/upload/v1702156749/6_qdm0kr.jpg", 
                    },
                        {
                        nombre: "Fondos concursables",
                        descripcion: "Fondos concursables es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                        imagen:"https://res.cloudinary.com/de74rjdry/image/upload/v1702156750/7_bgprm6.jpg", 
                    },
                        {
                        nombre: "Fondos concursables Industrias Creativas",
                        descripcion: "Fondos concursables Industrias Creativas es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                        imagen:"https://res.cloudinary.com/de74rjdry/image/upload/v1702156751/8_jcplir.jpg", 
                    },
                        {
                        nombre: "Fortalecimiento de la Identidad Cultural",
                        descripcion: "Fortalecimiento de la Identidad Cultural es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                        imagen:"https://res.cloudinary.com/de74rjdry/image/upload/v1702156751/9_q3tcfq.jpg", 
                    },
                        {
                        nombre: "Migrantes",
                        descripcion: "Migrantes es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                        imagen:"https://res.cloudinary.com/de74rjdry/image/upload/v1702156751/10_rtq9vx.jpg", 
                    },
                        {
                        nombre: "Plan Nacional de Lectura",
                        descripcion: "Plan Nacional de Lectura es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                        imagen:"https://res.cloudinary.com/de74rjdry/image/upload/v1702156797/11_jbox8y.jpg", 
                    },
                        {
                        nombre: "Plan Nacional de Desarrollo Artístico en la región",
                        descripcion: "Plan Nacional de Desarrollo Artístico en la región es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                        imagen:"https://res.cloudinary.com/de74rjdry/image/upload/v1702156853/12_i8pu0i.jpg", 
                    },
                        {
                        nombre: "Red Cultural",
                        descripcion: "Red Cultural es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                        imagen:"https://res.cloudinary.com/de74rjdry/image/upload/v1702156909/13_zg652c.jpg", 
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
                    imagen:"https://res.cloudinary.com/de74rjdry/image/upload/v1702156749/1_c7hpcf.jpg",  
            });
            Programa.create({
                nombre: "CECREA",
                        descripcion: "CECREA es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com",
                        imagen:"https://res.cloudinary.com/de74rjdry/image/upload/v1702156749/2_da8nde.jpg",  
            });
            Programa.create({
                nombre: "Comunidad Creativa Regional",
                        descripcion: "Comunidad Creativa Regional es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                        imagen:"https://res.cloudinary.com/de74rjdry/image/upload/v1702156749/3_emhqmz.jpg", 
            });
            Programa.create({
                nombre: "Cultura, Memoria y DDHH",
                        descripcion: "Cultura, Memoria y DDHH es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                        imagen:"https://res.cloudinary.com/de74rjdry/image/upload/v1702156749/4_wgpq7d.jpg", 
            });
            Programa.create({
                nombre: "Estrategias Regionales",
                        descripcion: "Estrategias Regionales es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                        imagen:"https://res.cloudinary.com/de74rjdry/image/upload/v1702156750/5_zgietg.jpg", 
            });
            Programa.create({
                nombre: "Fondo del Arte y la Educación",
                        descripcion:  "Fondo del Arte y la Educación es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                        imagen:"https://res.cloudinary.com/de74rjdry/image/upload/v1702156749/6_qdm0kr.jpg", 
            });
            Programa.create({
                nombre: "Fondos concursables",
                        descripcion: "Fondos concursables es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                        imagen:"https://res.cloudinary.com/de74rjdry/image/upload/v1702156750/7_bgprm6.jpg", 
            });
            Programa.create({
                nombre: "Fondos concursables Industrias Creativas",
                        descripcion: "Fondos concursables Industrias Creativas es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com",  
                        imagen:"https://res.cloudinary.com/de74rjdry/image/upload/v1702156751/8_jcplir.jpg", 
            });
            Programa.create({
                nombre: "Fortalecimiento de la Identidad Cultural",
                        descripcion: "Fortalecimiento de la Identidad Cultural es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                        imagen:"https://res.cloudinary.com/de74rjdry/image/upload/v1702156751/9_q3tcfq.jpg", 
            });
            Programa.create({
                nombre: "Migrantes",
                        descripcion: "Migrantes es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                        imagen:"https://res.cloudinary.com/de74rjdry/image/upload/v1702156751/10_rtq9vx.jpg", 
            });
            Programa.create({
                nombre: "Plan Nacional de Lectura",
                        descripcion: "Plan Nacional de Lectura es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                        imagen:"https://res.cloudinary.com/de74rjdry/image/upload/v1702156797/11_jbox8y.jpg", 
            });
            Programa.create({
                nombre: "Plan Nacional de Desarrollo Artístico en la región",
                        descripcion: "Plan Nacional de Desarrollo Artístico en la región es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                        imagen:"https://res.cloudinary.com/de74rjdry/image/upload/v1702156853/12_i8pu0i.jpg", 
            });
            Programa.create({
                nombre: "Red Cultural",
                        descripcion: "Red Cultural es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
                        url: "http://google.com", 
                        imagen:"https://res.cloudinary.com/de74rjdry/image/upload/v1702156909/13_zg652c.jpg", 
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
