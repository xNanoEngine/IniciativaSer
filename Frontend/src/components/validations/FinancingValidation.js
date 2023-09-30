import * as Yup from "yup";

export const FinancingSchema = Yup.object().shape({
  financing: Yup.string().required("Este campo es obligatorio."),
  budget: Yup.number()
    .typeError("Tiene que ser un numero")
    .required("El presupuesto es obligatorio."),
});
