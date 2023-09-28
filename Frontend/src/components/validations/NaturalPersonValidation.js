import * as Yup from "yup";

const rutPattern = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/;

export const NaturalPersonSchema = Yup.object().shape({
  namePerson: Yup.string().required("El nombre es obligatorio"),
  lastNamePerson: Yup.string().required("El nombre es obligatorio"),
  rutPerson: Yup.string()
    .required("El RUT es obligatorio")
    .matches(rutPattern, "RUT no válido"),
  personRole: Yup.string().required("Campo requerido"),
  gender: Yup.string().required("Campo requerido"),
  country: Yup.string().required("Campo requerido"),
});
