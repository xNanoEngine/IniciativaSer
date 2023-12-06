import React from "react";
import Footer from "../components/imports/Footer";
import UserCreate from "../components/imports/userCreate";

const UserManagment = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="sm:py-16 py-6 flex flex-col ">
          <div className="flex flex-col mx-10 md:mx-60 md:my-5">
            <h1>Gestionar usuarios</h1>
            <div className="py-5">
              <span className="">Crear usuarios</span>
              <div className="flex flex-row py-5 justify-center">
                <UserCreate />
                <UserCreate />
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
