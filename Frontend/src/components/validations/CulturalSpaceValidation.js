import * as Yup from "yup";

export const CulturalSpaceSchema = Yup.object().shape({
  culturalSpaceName: Yup.string().required(
    "El nombre del espacio cultural es obligatorio"
  ),
  address: Yup.string().required("La dirección es obligatoria"),
  culturalSpaceTypes: Yup.string().required("Este campo es obligatorio"),
});
