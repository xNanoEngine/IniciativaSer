import {
  Document,
  CulturalSpace,
  Financing,
  Initiative,
  LegalPersonality,
  NaturalPerson,
  TargetAudiences,
} from "../components/imports/InitiativeFormComponents";
export const navLinks = [
  {
    title: "Inicio",
    ref: "/",
    id: "inicio",
  },
  {
    title: "Busqueda de información",
    ref: "buscar",
    id: "buscar",
    subLinks: [
      {
        title: "Búsqueda avanzada",
        ref: "/search",
        id: "avanzada",
      },
      {
        title: "Búsqueda de documentos",
        ref: "/document",
        id: "documentos",
      },
    ],
  },
  {
    title: "Indicadores territoriales",
    ref: "indicadores",
    id: "indicadores",
    subLinks: [
      {
        title: "Visor territorial",
        ref: "/visor",
        id: "visor",
      },
      {
        title: "Estadísticas",
        ref: "/estadisticas",
        id: "estadisticas",
      },
    ],
  },
  {
    title: "Registrar Información",
    ref: "/initiative",
    id: "iniciativa",
    isAuth: true, // Esta opción solo se mostrará si el usuario está logeado
  },
  {
    title: "Gestionar usuarios",
    ref: "/users",
    id: "usuarios",
    isAuth: true, // Esta opción solo se mostrará si el usuario está logeado
    isAdmin: true, // Esta opción solo se mostrará si el usuario es administrador
  },
  {
    title: "Iniciar Sesión",
    ref: "/login",
    id: "iniciar",
    isAuth: false, // Esta opción solo se mostrará si el usuario no está logeado
  },
  {
    title: "Mi cuenta",
    ref: "cuenta",
    id: "cuenta",
    isAuth: true, // Esta opción solo se mostrará si el usuario está logeado
    subLinks: [
      {
        title: "Mis datos",
        ref: "/subelemento1",
        id: "datos",
      },
      {
        title: "Mis registros",
        ref: "/records",
        id: "registros",
      },
      {
        title: "Salir",
        ref: "/logout", // Puedes usar una ruta diferente para cerrar sesión
        id: "salir",
      },
    ],
  },
];

export const titles = [
  {
    key: 1,
    title: "Personalidad Jurídica",
    code: "legalPersonality",
    data: <LegalPersonality />,
    isOpen: false,
  },
  {
    key: 2,
    title: "Persona Natural",
    data: <NaturalPerson />,
    code: "naturalPerson",
    isOpen: false,
  },
  {
    key: 3,
    title: "Iniciativa",
    data: <Initiative />,
    code: "initiative",
    isOpen: false,
  },
  {
    key: 4,
    title: "Espacio Cultural",
    data: <CulturalSpace />,
    code: "culturalSpace",
    isOpen: false,
  },
  {
    key: 5,
    title: "Público Objetivo",
    data: <TargetAudiences />,
    code: "targetAudiences",
    isOpen: false,
  },
  {
    key: 6,
    title: "Financiamiento",
    data: <Financing />,
    code: "financing",
    isOpen: false,
  },
  {
    key: 7,
    title: "Documento",
    data: <Document />,
    code: "document",
    isOpen: false,
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

export const gender = [
  { name: "Femenino" },
  { name: "Masculino" },
  { name: "No Binario" },
];

export const country = [
  { name: "Chile" },
  { name: "Argentina" },
  { name: "Peru" },
  { name: "Bolivia" },
];

export const initiativeType = [
  { name: "Asesoría" },
  { name: "Capacitación" },
  { name: "Concurso" },
  { name: "Evento" },
  { name: "Intervención territorial" },
  { name: "Mesa de trabajo" },
  { name: "Planificación" },
];

export const initiativeComponent = [
  { name: "Comisión de coordinación de protección de Mejor Niñez" },
  { name: "Componente de Formación de Material Didáctico" },
  { name: "FAE" },
  { name: "Ludoteca" },
  {
    name: "Mesa Comunal fortalecimiento para org. culturales comunitarias_La Unión",
  },
  {
    name: "Mesa Comunal fortalecimiento para org. culturales comunitarias_Mariquita",
  },
  {
    name: "Mesa Comunal fortalecimiento para org. culturales comunitarias_Ranco",
  },
  { name: "Mesa de infancia" },
  { name: "Mesa de memoria" },
  { name: "Mesa de trabajo 50 años del golpe militar" },
  { name: "Mesa regional de educación artística" },
  {
    name: "Mesa Regional fortalecimiento para organizaciones culturales comunitarias",
  },
  { name: "Pinta la calle" },
  { name: "SEA" },
];

export const initiativeConcurseLine = [
  { name: "Fomento a la Música Nacional" },
  { name: "FONDART Nacional" },
  { name: "FONDART Regional" },
  { name: "Fondo Audiovisual" },
  { name: "Fondo del Libro y la Lectura" },
  { name: "Fondo Educación" },
  { name: "FONPAT" },
];

export const initiativeArea = [
  { name: "Arquitectura" },
  { name: "Artes de la visualidad" },
  { name: "Artes Escénicas" },
  { name: "Artesanía" },
  { name: "Audiovisual" },
  { name: "Comunicación y medios" },
  { name: "Cultura Comunitaria" },
  { name: "Cultura y Patrimonio Migrante" },
  { name: "Diseño" },
  { name: "Gestión Cultural" },
  { name: "Libro / Lectura" },
  { name: "Memoria Histórica y DDHH" },
  { name: "Música" },
  { name: "Patrimonio Cultural" },
  { name: "Patrimonio Cultural Indígena/Afrodescendiente" },
  { name: "Patrimonio Cultural Inmaterial" },
  { name: "Patrimonio Cultural Material" },
  { name: "Patrimonio Natural" },
];

export const culturalSpaceTypes = [
  { name: "Archivo" },
  { name: "Biblioteca" },
  { name: "Centro Cultural y/o Casa de la Cultura" },
  { name: "Centro de comunidades indígenas" },
  { name: "Circo" },
  { name: "Escuela" },
  { name: "Espacio/Taller de comercialización de artesanía" },
  { name: "Espacio de residencias artísticas" },
  { name: "Galería de arte" },
  { name: "Junta de vecinos" },
  { name: "Librería" },
  { name: "Museo" },
  { name: "Plaza" },
  { name: "Sala de Cine/Multisala" },
  { name: "Sala de concierto" },
  { name: "Sala de ensayo/Sala de ensayo de artes escenícas" },
  { name: "Sala de exposición" },
  { name: "Sala de Agrupación Agua Potable Rural (APR)" },
  { name: "Teatro/Sala de teatro" },
];

export const targetType = [
  { name: "Organizaciones" },
  { name: "Jóvenes" },
  { name: "Infancia" },
];

export const financing = [{ name: "Asignacion Directa" }, { name: "Concurso" }];

export const documentType = [
  { name: "Afiche" },
  { name: "Animación" },
  { name: "Boletín" },
  { name: "Catálogo" },
  { name: "Estudio" },
  { name: "Folleto" },
  { name: "Fotografía" },
  { name: "Informe" },
  { name: "Libre" },
  { name: "Material pedagógico" },
  { name: "Memoria" },
  { name: "Norma" },
  { name: "Politica" },
  { name: "Postulación" },
  { name: "Revista" },
  { name: "Video" },
];

export const initiativeProgram = [
  {
    name: "Acciona",
    description:
      "Acciona es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
    img: "https://res.cloudinary.com/de74rjdry/image/upload/v1702156749/1_c7hpcf.jpg",
  },
  {
    name: "CECREA",
    description:
      "CECREA es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
    img: "https://res.cloudinary.com/de74rjdry/image/upload/v1702156749/2_da8nde.jpg",
  },
  {
    name: "Comunidad Creativa Regional",
    description:
      "Comunidad Creativa Regional es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
    img: "https://res.cloudinary.com/de74rjdry/image/upload/v1702156749/3_emhqmz.jpg",
  },
  {
    name: "Cultura, Memoria y DDHH",
    description:
      "Cultura, Memoria y DDHH es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
    img: "https://res.cloudinary.com/de74rjdry/image/upload/v1702156749/4_wgpq7d.jpg",
  },
  {
    name: "Estrategias Regionales",
    description:
      "Estrategias Regionales es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
    img: "https://res.cloudinary.com/de74rjdry/image/upload/v1702156750/5_zgietg.jpg",
  },
  {
    name: "Fondo del Arte y la Educación",
    description:
      "Fondo del Arte y la Educación es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
    img: "https://res.cloudinary.com/de74rjdry/image/upload/v1702156749/6_qdm0kr.jpg",
  },
  {
    name: "Fondos concursables",
    description:
      "Fondos concursables es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
    img: "https://res.cloudinary.com/de74rjdry/image/upload/v1702156750/7_bgprm6.jpg",
  },
  {
    name: "Fondos concursables Industrias Creativas",
    description:
      "Fondos concursables Industrias Creativas es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
    img: "https://res.cloudinary.com/de74rjdry/image/upload/v1702156751/8_jcplir.jpg",
  },
  {
    name: "Fortalecimiento de la Identidad Cultural",
    description:
      "Fortalecimiento de la Identidad Cultural es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
    img: "https://res.cloudinary.com/de74rjdry/image/upload/v1702156751/9_q3tcfq.jpg",
  },
  {
    name: "Migrantes",
    description:
      "Migrantes es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
    img: "https://res.cloudinary.com/de74rjdry/image/upload/v1702156751/10_rtq9vx.jpg",
  },
  {
    name: "Plan Nacional de Lectura",
    description:
      "Plan Nacional de Lectura es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
    img: "https://res.cloudinary.com/de74rjdry/image/upload/v1702156797/11_jbox8y.jpg",
  },
  {
    name: "Plan Nacional de Desarrollo Artístico en la región",
    description:
      "Plan Nacional de Desarrollo Artístico en la región es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
    img: "https://res.cloudinary.com/de74rjdry/image/upload/v1702156853/12_i8pu0i.jpg",
  },
  {
    name: "Red Cultural",
    description:
      "Red Cultural es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
    img: "https://res.cloudinary.com/de74rjdry/image/upload/v1702156909/13_zg652c.jpg",
  },
];
export const initiativeFilters = [
  { name: "Nombre" },
  { name: "Descripcion" },
  { name: "Programa" },
  { name: "Financiamiento" },
];

export const comuneFilters = [{ name: "Valdivia" }, { name: "Paillaco" }];
export const SearchFilters = [
  {
    type: "Iniciativa",
    data: initiativeFilters,
    singleSelect: true,
  },
  {
    type: "Comuna",
    data: comuneFilters,
    singleSelect: false,
  },
];

export const DocumentFilters = [
  {
    type: "Tipo",
    data: documentType,
    singleSelect: false,
  },
];

export const accountRole = [{ name: "admin" }, { name: "seremi" }];
