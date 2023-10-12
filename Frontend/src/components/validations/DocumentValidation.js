import * as Yup from "yup";

export const DocumentSchema = Yup.object().shape({
  documentName: Yup.string()
    .trim()
    .required("El nombre del documento es obligatorio")
    .min(1, "El nombre del documento debe tener al menos un carácter")
    .max(100, "El nombre del documento no puede superar los 100 carácteres"),
  documentDate: Yup.date()
    .typeError("La fecha es obligatoria")
    .required("La fecha es obligatoria")
    .min(new Date("1900-01-01"), "Error esa fecha es menor a la aceptada")
    .max(new Date("2100-01-01"), "Error esa fecha es mayor a la permitida"),
  documentType: Yup.string().required("Este campo es obligatorio"),
  institutionName: Yup.string()
    .trim()
    .required("El nombre de la institución obligatorio")
    .min(1, "El nombre de la institución debe tener al menos un carácter")
    .max(
      100,
      "El nombre de la institución no puede superar los 100 carácteres"
    ),
  keyWords: Yup.string()
    .trim()
    .required("Este campo es obligatorio")
    .min(1, "La palabra clave debe tener al menos un carácter")
    .max(30, "La palabra clave no puede superar los 30 carácteres"),
  documentUrl: Yup.string()
    .trim()
    .url("Debe ser una URL válida")
    .required("El URL es obligatorio"),
});
