import * as Yup from "yup";

export const TargetAudiencesSchema = Yup.object().shape({
  targetAmount: Yup.string().required("El Publico Objetivo es obligatorio"),
  targetType: Yup.string().required("La dirección es obligatoria"),
});
