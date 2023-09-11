import { facebook, instagram, twitter } from "../assets";

export const navLinks = [
  {
    title: "Inicio",
    ref: "/home", // Rutas
  },
  {
    title: "Busqueda de información",
    ref: "buscar", // referencia para el navBar, (No es una ruta)
    subLinks: [
      // Subelementos para "Indicadores territoriales"
      {
        title: "Búsqueda avanzada",
        ref: "/avanzada",
      },
      {
        title: "Búsqueda de documentos",
        ref: "/documentos",
      },
    ],
  },
  {
    title: "Indicadores territoriales",
    ref: "indicadores", // referencia para el navBar, (No es una ruta)
    subLinks: [
      // Subelementos para "Indicadores territoriales"
      {
        title: "Subelemento 1",
        ref: "/subelemento1",
      },
      {
        title: "Subelemento 2",
        ref: "/subelemento2",
      },
    ],
  },
  {
    title: "Registrar Iniciativa",
    ref: "/usuarios",
  },
  {
    title: "Iniciar Sesion",
    ref: "/login",
  },
  {
    title: "Usuario",
    ref: "/usuarios",
  },
  {
    title: "Papers",
    ref: "/papers",
  },
];

export const socialMedia = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/",
    icon: facebook,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/",
    icon: instagram,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/",
    icon: twitter,
  },
];
