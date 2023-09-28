import * as Yup from "yup";

export const DocumentSchema = Yup.object().shape({
  documentName: Yup.string().required("El nombre del documento es obligatorio"),
  documentDate: Yup.date()
    .typeError("La fecha es obligatoria")
    .required("La fecha es obligatoria"),
  documentType: Yup.string().required("Este campo es obligatorio"),
  institutionName: Yup.string().required(
    "El nombre de la institución obligatorio"
  ),
  keyWords: Yup.string().required("Este campo es obligatorio"),
  documentUrl: Yup.string()
    .url("Debe ser una URL válida")
    .required("El URL es obligatorio"),
});
