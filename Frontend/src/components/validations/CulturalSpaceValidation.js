import * as Yup from "yup";

export const CulturalSpaceSchema = Yup.object().shape({
  culturalSpaceName: Yup.string()
    .trim()
    .required("El nombre del espacio cultural es obligatorio")
    .min(1, "El nombre tiene que tener al menos un carácter")
    .max(100, "El nombre no puede superar los 100 carácteres"),
  address: Yup.string()
    .trim()
    .required("La dirección es obligatoria")
    .min(1, "La dirección debe tener al menos un carácter")
    .max(100, "La dirección no puede superar los 100 carácteres"),
  culturalSpaceTypes: Yup.string().required("Este campo es obligatorio"),
});
