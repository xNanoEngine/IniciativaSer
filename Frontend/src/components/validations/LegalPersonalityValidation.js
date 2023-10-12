import * as Yup from "yup";

const rutPattern = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/;

export const LegalPersonalitySchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("El nombre es obligatorio")
    .min(1, "El nombre de la persona debe tener al menos un carácter")
    .max(100, "El nombre de la persona no puede superar los 100 carácteres"),
  rut: Yup.string()
    .required("El RUT es obligatorio")
    .matches(rutPattern, "RUT no válido"),
  typeLegalPersonality: Yup.string().required("Campo requerido"),
  juridicPersonRole: Yup.string().required("Campo requerido"),
});
