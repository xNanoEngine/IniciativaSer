import React from "react";

const UserList = ({ usersData }) => {
  return (
    <div className="user-list-container max-h-60 overflow-y-auto shadow-lg rounded-md border-2">
      <div className="user-list space-y-4 ">
        {usersData.map((user) => (
          <div key={user.id} className="user-item bg-white shadow-md p-4 ">
            <h2 className="text-lg font-semibold">{`Nombre: ${user.name}`}</h2>
            <p className="text-gray-600">{`Rol: ${user.rol}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default UserList;
