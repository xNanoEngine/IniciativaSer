import React, { useState, useEffect } from "react";
import Footer from "../components/imports/Footer";
import UserCreate from "../components/imports/UserCreate";
import UserList from "../components/imports/UserList";
import clientAxios from "../components/config/clienteAxios";
import getConfigAuth from "../utils/configToken";
const UserManagment = () => {
  const [usersData, setUsersData] = useState([]);

  const getUsers = async () => {
    try {
      const config = getConfigAuth(localStorage.getItem("token"));
      const { data } = await clientAxios.get(`/cuentas`, {
        params: {},
        ...config,
      });
      setUsersData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const addUser = (newUser) => {
    setUsersData((prevUsers) => [...prevUsers, newUser]);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="sm:py-16 py-6 flex flex-col ">
          <div className="flex flex-col mx-10 md:mx-60 md:my-5">
            <h1>Gestionar usuarios</h1>
            <div className="py-5">
              <div className="flex flex-row py-5 justify-center">
                <div className="w-full">
                  <h2 className="text-lg font-semibold">Crear usuarios</h2>
                  <UserCreate onUserCreate={addUser} />
                </div>
                <div className="w-full">
                  <h2 className="text-lg font-semibold">Listar Usuarios</h2>
                  <UserList usersData={usersData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserManagment;
