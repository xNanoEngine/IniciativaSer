import * as Yup from "yup";

export const InitiativeSchema = Yup.object().shape({
  initiativeName: Yup.string()
    .trim()
    .required("El nombre de la iniciativa es obligatorio")
    .min(1, "El nombre de la iniciativa debe tener al menos un carácter")
    .max(100, "El nombre de la iniciativa no puede superar los 100 carácteres"),
  initiativeProgram: Yup.string().required(
    "El tipo de programa es obligatorio"
  ),
  initiativeType: Yup.string().required("El tipo de iniciativa es obligatorio"),
  initiativeComponent: Yup.string().required("Este campo es obligatorio"),
  initiativeConcurseLine: Yup.string().required("Este campo es obligatorio"),
  initiativeArea: Yup.string().required("Este campo es obligatorio"),
  initiativeDescription: Yup.string()
    .trim()
    .required("La descripción de la iniciativa es obligatoria")
    .min(1, "La descripcion debe tener al menos un carácter")
    .max(5000, "La descripcion no puede superar los 5000 carácteres"),
  initiativeInitDate: Yup.date()
    .typeError("La fecha de inicio es obligatoria")
    .required("La fecha de inicio es obligatoria")
    .min(new Date("1900-01-01"), "Error esa fecha es menor a la aceptada")
    .max(new Date("2100-01-01"), "Error esa fecha es mayor a la permitida")
    .test(
      "initiativeInitDate",
      "La fecha de inicio debe ser menor que la fecha de fin",
      function (initDate) {
        const endDate = this.parent.initiativeEndDate; // Obtenemos la fecha de fin
        if (!initDate || !endDate) {
          return true; // Si alguna de las fechas está vacía, no realizamos la validación
        }
        return new Date(initDate) < new Date(endDate);
      }
    ),
  initiativeEndDate: Yup.date()
    .typeError("La fecha de fin es obligatoria")
    .required("La fecha de fin es obligatoria")
    .min(new Date("1900-01-01"), "Error esa fecha es menor a la aceptada")
    .max(new Date("2100-01-01"), "Error esa fecha es mayor a la permitida"),
});
