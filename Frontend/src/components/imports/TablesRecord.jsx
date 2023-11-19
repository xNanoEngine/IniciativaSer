import React, { useState, useEffect } from "react";
import {
  PencilIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/solid";

import clientAxios from "../config/clienteAxios";
const TablesRecord = ({ currentPage, setCurrentPage }) => {
  const [displayedRows, setDisplayedRows] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const RowsPerPage = 5;

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const MaxVisiblePages = 5; // Define cuántas páginas deseas mostrar
  let rangeStart = Math.max(1, currentPage - Math.floor(MaxVisiblePages / 2));
  const rangeEnd = Math.min(totalPages, rangeStart + MaxVisiblePages - 1);
  if (rangeEnd - rangeStart + 1 < MaxVisiblePages) {
    rangeStart = Math.max(1, totalPages - MaxVisiblePages + 1);
  }
  const visiblePages = Array.from(
    { length: rangeEnd - rangeStart + 1 },
    (_, i) => rangeStart + i
  );
  return (
    <div>
      <table className="w-full table-auto text-left ml-4 mt-5">
        <thead className="border-gray-400 border">
          <tr>
            <th className="p-4">Programa</th>
            <th className="p-4">Iniciativa</th>
            <th className="p-4">Estado de registro</th>
            <th className="p-4">{""}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-gray-400">
            <td className="p-4">Programa 1</td>
            <td className="p-4">Iniciativa 1</td>
            <td className="p-4">Registrado</td>
            <td className="p-4">
              <a className="text-blue-500" href="">
                ver/Editar
              </a>
            </td>
          </tr>
          <tr className="border border-gray-400">
            <td className="p-4">Programa 2</td>
            <td className="p-4">Iniciativa 2</td>
            <td className="p-4">Pendiente</td>
            <td className="p-4">
              <a className="text-blue-500" href="">
                ver/Editar
              </a>
            </td>
          </tr>
          <tr className="border border-gray-400">
            <td className="p-4">Programa 3</td>
            <td className="p-4">Iniciativa 3</td>
            <td className="p-4">En proceso</td>
            <td className="p-4">
              <a className="text-blue-500" href="">
                ver/Editar
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="w-full flex flex-row items-center justify-between border-t border-blue-gray-50 p-4 select-none">
        <div className="flex justify-center w-8 h-8 hover:bg-gray-100 hover:rounded-lg">
          <ChevronLeftIcon
            className="w-7"
            stroke="black"
            onClick={handlePreviousPage}
          />
        </div>
        <div className="flex items-center gap-2 ">
          {visiblePages.map((page) => (
            <button
              key={page}
              className={`w-8 h-8 ${
                page === currentPage
                  ? "text-white bg-black rounded-md shadow-md text-lg scale-110 transition-transform"
                  : "text-black scale-100 hover:shadow-md hover:rounded-md"
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
        <div
          className={`flex justify-center w-8 h-8 ${
            currentPage >= totalPages
              ? ""
              : "hover:bg-gray-100 hover:rounded-lg"
          }`}
        >
          <ChevronRightIcon
            className={`w-7 ${
              currentPage >= totalPages ? "opacity-20" : "opacity-100"
            }`}
            stroke="black"
            onClick={handleNextPage}
            disabled={currentPage >= totalPages}
          />
        </div>
      </div>
    </div>
  );
};

export default TablesRecord;
