import * as Yup from "yup";

export const CreateUserSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("El nombre es obligatorio")
    .min(4, "El nombre tiene que tener al menos cuatro carácteres")
    .max(10, "El nombre no puede superar los diez carácteres"),
  password: Yup.string()
    .trim()
    .required("La contraseña obligatoria")
    .min(4, "La contraseña debe tener al menos cuatro carácteres")
    .max(10, "La contraseña no puede superar los diez carácteres"),
  rol: Yup.string().required("Este campo es obligatorio"),
});
