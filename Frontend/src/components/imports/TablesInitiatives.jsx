import React, { useState, useEffect } from "react";
import {
  PencilIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/solid";

import clientAxios from "../config/clienteAxios";

const TablesInitiatives = ({ busqueda, currentPage, setCurrentPage }) => {
  const TABLE_HEAD = [
    "Programa",
    "Titulo",
    "Componente",
    "Financiamiento",
    "Descripcion",
    "",
  ];
  const [displayedRows, setDisplayedRows] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const RowsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Establece isLoading en true antes de la solicitud.
      try {
        const response = await clientAxios.get(`/iniciativas`, {
          params: {
            page: currentPage,
            perPage: RowsPerPage,
            busqueda: busqueda,
          },
        });

        if (response.status === 200) {
          const data = response.data;
          setTotalPages(data.totalPages);
          setDisplayedRows(data.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [busqueda, currentPage]);

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
  useEffect(() => {
    // Detectar si la vista es móvil (ancho de pantalla <= 768px)
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    // Escuchar eventos de cambio de tamaño de ventana
    window.addEventListener("resize", handleResize);

    // Inicializar el estado isMobileView
    handleResize();

    // Limpia el event listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const MaxVisiblePages = 5; // Define cuántas páginas deseas mostrar

  // Calcular la página de inicio y fin del rango de botones visibles
  let rangeStart = Math.max(1, currentPage - Math.floor(MaxVisiblePages / 2));
  const rangeEnd = Math.min(totalPages, rangeStart + MaxVisiblePages - 1);

  // Ajustar el rango si no hay suficientes páginas para mostrar 5 números
  if (rangeEnd - rangeStart + 1 < MaxVisiblePages) {
    rangeStart = Math.max(1, totalPages - MaxVisiblePages + 1);
  }

  // Generar los botones de página visibles
  const visiblePages = Array.from(
    { length: rangeEnd - rangeStart + 1 },
    (_, i) => rangeStart + i
  );

  return (
    <div
      className={`rounded-md shadow-md ${
        isMobileView ? "overflow-x-auto" : "overflow-y-auto"
      }`}
    >
      {isLoading ? ( // Si isLoading es true, muestra el indicador de carga.
        <div className="flex justify-center items-center h-48">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div>
          {" "}
          <table className="w-full table-auto text-left">
            <thead className="border-gray-600 border-y-2">
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="p-4">
                    <span className="font-bold leading-none opacity-100 text-black ">
                      {head}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {displayedRows.map(
                (
                  { id, name, amount, date, account, accountNumber, expiry },
                  index
                ) => {
                  const isLast = index === displayedRows.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
                  return (
                    <tr
                      key={index}
                      className={`${index % 2 == 0 ? "bg-yellow-200" : ""}`}
                    >
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <span className="font-normal text-gray-600 text-sm">
                            {name}
                          </span>
                        </div>
                      </td>
                      <td className={classes}>
                        <span className="font-normal text-gray-600 text-sm">
                          {amount}
                        </span>
                      </td>
                      <td className={classes}>
                        <span className="font-normal text-gray-600 text-sm">
                          {date}
                        </span>
                      </td>
                      <td className={classes}>
                        <div className="w-max">a</div>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <span className="font-normal text-gray-600 text-sm capitalize">
                              {account.split("-").join(" ")} {accountNumber}
                            </span>
                            <span className="font-normal text-gray-600 text-sm opacity-70">
                              {expiry}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <a href={`/view?id=${id}`} className="text-blue-500">
                          Leer iniciativa
                        </a>
                      </td>
                      <td className={classes}>
                        <div content="Edit User">
                          <button variant="text">
                            <PencilIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
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
      )}
    </div>
  );
};

export default TablesInitiatives;
