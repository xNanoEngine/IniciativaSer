import * as Yup from "yup";

export const InitiativeSchema = Yup.object().shape({
  initiativeName: Yup.string().required(
    "El nombre de la iniciativa es obligatorio"
  ),
  initiativeType: Yup.string().required("El tipo de iniciativa es obligatorio"),
  initiativeComponent: Yup.string().required("Este campo es obligatorio"),
  initiativeConcurseLine: Yup.string().required("Este campo es obligatorio"),
  initiativeArea: Yup.string().required("Este campo es obligatorio"),
  initiativeDescription: Yup.string().required(
    "La descripción de la iniciativa es obligatoria"
  ),
  initiativeInitDate: Yup.date()
    .typeError("La fecha de inicio es obligatoria")
    .required("La fecha de inicio es obligatoria"),
  initiativeEndDate: Yup.date()
    .typeError("La fecha de fin es obligatoria")
    .required("La fecha de fin es obligatoria"),
});
