import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  user_account: Yup.string().required("El nombre de la cuenta es necesario"),
  user_password: Yup.string().required(
    "La contraseña de la cuenta es necesaria"
  ),
});
