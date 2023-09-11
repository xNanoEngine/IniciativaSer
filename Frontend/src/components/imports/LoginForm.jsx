import React from "react";

const LoginForm = () => {
  return (
    <div className="flex flex-col space-y-6">
      <form action="">
        <div className="flex flex-col space-y-4">
          <label htmlFor="">Nombre de Usuario *</label>
          <input
            type="text"
            id="user"
            className="w-full xl:w-1/2 px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
            placeholder="Escriba su nombre de usuario en Sistema de Información Cultural de los Ríos."
          />
          <label htmlFor="">Contraseña *</label>
          <input
            type="text"
            id="password"
            className="w-full xl:w-1/2 px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
            placeholder="Escriba la contraseña asignada a su nombre de usuario."
          />
          <div className="flex flex-row space-x-2 text-sm font-poppins text-blue-700">
            <a href="/forgot">Olvide mi contraseña</a>
            <p>|</p>
            <a href="/help">Ayuda</a>
          </div>
        </div>
        <div className="flex justify-center xl:justify-normal">
          <button className="bg-[#1A202C] text-white w-32 h-16 rounded-md mt-7 font-custom_Syne hover:underline">
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
