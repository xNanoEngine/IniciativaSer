import { facebook, instagram, twitter } from "../assets";

export const navLinks = [
  {
    title: "Inicio",
    ref: "/",
  },
  {
    title: "Busqueda de información",
    ref: "buscar",
    subLinks: [
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
    ref: "indicadores",
    subLinks: [
      {
        title: "Visor territorial",
        ref: "/visor",
      },
      {
        title: "Estadísticas",
        ref: "/estadisticas",
      },
    ],
  },
  {
    title: "Registrar Información",
    ref: "/initiative",
    isAuth: true, // Esta opción solo se mostrará si el usuario está logeado
  },
  {
    title: "Iniciar Sesión",
    ref: "/login",
    isAuth: false, // Esta opción solo se mostrará si el usuario no está logeado
  },
  {
    title: "Mi cuenta",
    ref: "cuenta",
    isAuth: true, // Esta opción solo se mostrará si el usuario está logeado
    subLinks: [
      {
        title: "Mis datos",
        ref: "/subelemento1",
      },
      {
        title: "Mis registros",
        ref: "/subelemento2",
      },
      {
        title: "Salir",
        ref: "/logout", // Puedes usar una ruta diferente para cerrar sesión
      },
    ],
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

export const typeLegalPersonality = [
  { name: "Institución pública" },
  { name: "Organización sin fines de lucro" },
  { name: "Junta de vecinos" },
  { name: "Organización con fines de lucro" },
];
export const personRole = [
  { name: "Ejecutor" },
  { name: "Coejecutor" },
  { name: "Organizador" },
  { name: "Financista" },
  { name: "Evaluador" },
  { name: "Contraparte" },
];
