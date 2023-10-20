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
  },
  {
    title: "Busqueda de información",
    ref: "buscar",
    subLinks: [
      {
        title: "Búsqueda avanzada",
        ref: "/search",
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

export const titles = [
  {
    key: 1,
    title: "Personalidad Jurídica",
    data: <LegalPersonality />,
    isOpen: false,
  },
  {
    key: 2,
    title: "Persona Natural",
    data: <NaturalPerson />,
    isOpen: false,
  },
  {
    key: 3,
    title: "Iniciativa",
    data: <Initiative />,
    isOpen: false,
  },
  {
    key: 4,
    title: "Espacio Cultural",
    data: <CulturalSpace />,
    isOpen: false,
  },
  {
    key: 5,
    title: "Público Objetivo",
    data: <TargetAudiences />,
    isOpen: false,
  },
  {
    key: 6,
    title: "Financiamiento",
    data: <Financing />,
    isOpen: false,
  },
  {
    key: 7,
    title: "Documento",
    data: <Document />,
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
  },
  {
    name: "CECREA",
    description:
      "CECREA es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
  },
  {
    name: "Comunidad Creativa Regional",
    description:
      "Comunidad Creativa Regional es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
  },
  {
    name: "Cultura, Memoria y DDHH",
    description:
      "Cultura, Memoria y DDHH es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
  },
  {
    name: "Estrategias Regionales",
    description:
      "Estrategias Regionales es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
  },
  {
    name: "Fondo del Arte y la Educación",
    description:
      "Fondo del Arte y la Educación es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
  },
  {
    name: "Fondos concursables",
    description:
      "Fondos concursables es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
  },
  {
    name: "Fondos concursables Industrias Creativas",
    description:
      "Fondos concursables Industrias Creativas es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
  },
  {
    name: "Fortalecimiento de la Identidad Cultural",
    description:
      "Fortalecimiento de la Identidad Cultural es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
  },
  {
    name: "Migrantes",
    description:
      "Migrantes es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
  },
  {
    name: "Plan Nacional de Lectura",
    description:
      "Plan Nacional de Lectura es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
  },
  {
    name: "Plan Nacional de Desarrollo Artístico en la región",
    description:
      "Plan Nacional de Desarrollo Artístico en la región es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
  },
  {
    name: "Red Cultural",
    description:
      "Red Cultural es uno de los programas mas reconocidos a nivel pais, en el se pueden destacar diferentes proyectos como por ejemplo: Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.",
  },
];
