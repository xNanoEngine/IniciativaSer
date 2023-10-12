import * as Yup from "yup";

const rutPattern = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/;

export const NaturalPersonSchema = Yup.object().shape({
  namePerson: Yup.string()
    .trim()
    .required("El nombre es obligatorio")
    .min(1, "El nombre de la persona debe tener al menos un carácter")
    .max(100, "El nombre de la persona no puede superar los 100 carácteres"),
  lastNamePerson: Yup.string()
    .trim()
    .required("El apellido es obligatorio")
    .min(1, "El apellido de la persona debe tener al menos un carácter")
    .max(100, "El apellido de la persona no puede superar los 100 carácteres"),
  rutPerson: Yup.string()
    .required("El RUT es obligatorio")
    .matches(rutPattern, "RUT no válido"),
  personRole: Yup.string().required("Campo requerido"),
  gender: Yup.string().required("Campo requerido"),
  country: Yup.string().required("Campo requerido"),
});
