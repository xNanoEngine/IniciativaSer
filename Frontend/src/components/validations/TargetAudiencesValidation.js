import * as Yup from "yup";

export const TargetAudiencesSchema = Yup.object().shape({
  targetAmount: Yup.number()
    .typeError("Tiene que ser un numero.")
    .required("El Publico Objetivo es obligatorio"),
  targetType: Yup.string().required("La dirección es obligatoria"),
});
