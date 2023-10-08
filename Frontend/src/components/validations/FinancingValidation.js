import * as Yup from "yup";

export const FinancingSchema = Yup.object().shape({
  financing: Yup.string().required("Este campo es obligatorio."),
  budget: Yup.number()
    .typeError("Tiene que ser un numero")
    .min(0, "Tiene que ser un número positivo")
    .required("El presupuesto es obligatorio."),
});
