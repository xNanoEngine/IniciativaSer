import React, { useState } from "react";
import clientAxios from "../config/clienteAxios";
import getConfigAuth from "../../utils/configToken";
import Combobox from "./Combobox";
import { accountRole } from "../../constants";
import { CreateUserSchema } from "../validations/CreateUserValidation";
const UserCreate = () => {
  const [user_account, setUser_account] = useState("");
  const [user_password, setUser_password] = useState("");
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errors, setErrors] = useState({});
  const handleOptionChange = (key, option) => {
    setSelectedOptions((prevOptions) => ({ ...prevOptions, [key]: option }));
  };
  const handleUserAccountChange = (e) => {
    setUser_account(e.target.value);
  };

  const handleUserPasswordChange = (e) => {
    setUser_password(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await CreateUserSchema.validate(
        {
          name: user_account,
          password: user_password,
          rol: selectedOptions.accountRole,
        },
        { abortEarly: false }
      );
      const config = getConfigAuth(localStorage.getItem("token"));
      const { data } = await clientAxios.post(
        `/cuentas`,
        {
          name: user_account,
          password: user_password,
          rol: selectedOptions.accountRole,
        },
        config
      );
      //window.location.href = "/home";
      setErrors({});
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex flex-col space-y-6 w-full">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-4">
          <label htmlFor="user_account">Nombre de Usuario *</label>
          <input
            type="text"
            id="user_account"
            value={user_account}
            onChange={handleUserAccountChange}
            className={`w-full xl:w-1/2 px-4 py-2 rounded border focus:outline-none focus:border-blue-500 ${
              errors.name ? "border-red-500" : ""
            }`}
            placeholder="Escriba el nombre de usuario."
          />
          {errors.name && <span className="text-red-500">{errors.name}</span>}
          <label htmlFor="user_password">Contraseña *</label>
          <input
            type="password"
            id="user_password"
            value={user_password}
            onChange={handleUserPasswordChange}
            className={`w-full xl:w-1/2 px-4 py-2 rounded border focus:outline-none focus:border-blue-500 ${
              errors.password ? "border-red-500" : ""
            }`}
            placeholder="Escriba la contraseña."
          />
          {errors.password && (
            <span className="text-red-500">{errors.password}</span>
          )}
          <Combobox
            data={accountRole}
            label={"Rol de cuenta"}
            prop={"w-52 mt-6"}
            onChange={(option) => handleOptionChange("accountRole", option)}
            error={errors.rol}
          />
        </div>
        <div className="flex justify-center xl:justify-normal">
          <button
            type="submit"
            className="bg-[#2c2c1a] text-white w-32 h-16 rounded-md mt-7 font-custom_Syne hover:underline"
          >
            Crear usuario
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserCreate;
