import React, { useState } from "react";
import clientAxios from "../config/clienteAxios";
import { loginSchema } from "../validations/LoginValidation";
const LoginForm = () => {
  const [user_account, setUser_account] = useState("");
  const [user_password, setUser_password] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [errors, setErrors] = useState({});
  const handleUserAccountChange = (e) => {
    setUser_account(e.target.value);
  };

  const handleUserPasswordChange = (e) => {
    setUser_password(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginSchema.validate(
        {
          user_account: user_account.trim(),
          user_password: user_password.trim(),
        },
        { abortEarly: false }
      );
      setErrors({});
      try {
        const { data } = await clientAxios.post(`/cuentas/login`, {
          name: user_account,
          password: user_password,
        });
        localStorage.setItem("token", data.token);
        localStorage.setItem("rol", data.userRol);
        window.location.href = "/home";
      } catch (error) {
        setError("Usuario o contraseña incorrectos");
        setShowError(true);
      }
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner?.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex flex-col space-y-6">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-4">
          <label htmlFor="user_account">Nombre de Usuario *</label>
          <input
            type="text"
            id="user_account"
            value={user_account}
            onChange={handleUserAccountChange}
            className={`w-full xl:w-1/2 px-4 py-2 rounded border focus:outline-none focus:border-blue-500 ${
              errors.user_account ? "border-red-500" : ""
            }`}
            placeholder="Escriba su nombre de usuario en Sistema de Información Cultural de los Ríos."
          />
          {errors.user_account && (
            <span className="text-red-500">{errors.user_account}</span>
          )}
          <label htmlFor="user_password">Contraseña *</label>
          <input
            type="password"
            id="user_password"
            value={user_password}
            onChange={handleUserPasswordChange}
            className={`w-full xl:w-1/2 px-4 py-2 rounded border focus:outline-none focus:border-blue-500 ${
              errors.user_password ? "border-red-500" : ""
            }`}
            placeholder="Escriba la contraseña asignada a su nombre de usuario."
          />
          {errors.user_password && (
            <span className="text-red-500">{errors.user_password}</span>
          )}
          <div className="flex flex-row space-x-2 text-sm font-poppins text-blue-700">
            <a href="/forgot">Olvidé mi contraseña</a>
            <p>|</p>
            <a href="/help">Ayuda</a>
          </div>
        </div>
        {showError && <p className="text-red-500">{error}</p>}
        <div className="flex justify-center xl:justify-normal">
          <button
            type="submit"
            className="bg-[#1A202C] text-white w-32 h-16 rounded-md mt-7 font-custom_Syne hover:underline"
          >
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
