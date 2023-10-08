import * as Yup from "yup";

export const TargetAudiencesSchema = Yup.object().shape({
  targetAmount: Yup.number()
    .typeError("Tiene que ser un numero.")
    .min(0, "Tiene que ser un número positivo")
    .required("El Publico Objetivo es obligatorio"),
  targetType: Yup.string().required("La dirección es obligatoria"),
});
