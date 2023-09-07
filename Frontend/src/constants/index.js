import { facebook, instagram, twitter } from "../assets";

export const navLinks = [
  {
    title: "Inicio",
    ref: "/home",
  },
  {
    title: "Busqueda de información",
    ref: "/usuarios",
  },
  {
    title: "Indicadores territoriales",
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
