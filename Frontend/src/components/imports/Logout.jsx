import React from "react";

const Logout = ({ isOpen, onClose }) => {
  const handleLogout = () => {
    // Realiza aquí la lógica de cierre de sesión, por ejemplo, borra el token de autenticación
    localStorage.removeItem("token");
    // Cierra el modal de Logout
    onClose();
    window.location.href = "/home";
    window.location.reload();
    // Recargar la página o redirigir a la página de inicio de sesión, según tu lógica
    // window.location.reload(); // Descomenta esta línea si deseas recargar la página
  };
  return (
    <>
      {isOpen && (
        <div>
          <div className="fixed inset-0 backdrop-blur-md bg-gray-300 opacity-70"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50 ">
            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
              <div className="modal-content py-4 text-left px-6">
                <h2 className="text-lg font-semibold">
                  ¿Estás seguro de que deseas cerrar sesión?
                </h2>
                <div className="mt-4 flex justify-end space-x-4">
                  <button
                    className="text-red-500 hover:text-red-600 font-semibold"
                    onClick={onClose}
                  >
                    Cancelar
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                    onClick={handleLogout}
                  >
                    Cerrar Sesión
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Logout;
