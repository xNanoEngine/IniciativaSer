import React, { useState, useEffect } from "react";
import {
  PencilIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/solid";
import { verifyToken } from "../../utils/authUtils";
import clientAxios from "../config/clienteAxios";

const TablesInitiatives = ({
  busqueda,
  currentPage,
  setCurrentPage,
  filters,
}) => {
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
  const [userId, setUserId] = useState();
  const RowsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      const Filtro_Iniciativa = filters.Iniciativa
        ? `${filters.Iniciativa}`
        : null;
      const Filtro_Comuna = filters.Comuna ? `${filters.Comuna}` : null;
      try {
        const response = await clientAxios.get(`/iniciativas`, {
          params: {
            Page: currentPage,
            PerPage: RowsPerPage,
            Busqueda: busqueda,
            Filtro_Iniciativa,
            Filtro_Comuna,
            token,
          },
        });

        if (response.status === 200) {
          const data = response.data;
          const accountId = data.accountId;
          localStorage.setItem("data", JSON.stringify(data.results));
          setUserId(accountId);
          setTotalPages(data.totalPages);
          setDisplayedRows(data.results);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(filters);
      }
    };

    // Verificar si filters no está vacío antes de realizar la solicitud
    if (Object.keys(filters).length > 0) {
      fetchData();
    }
  }, [busqueda, currentPage, filters]);

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
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-48">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="flex flex-col space-y-10">
          {displayedRows && displayedRows.length > 0 ? (
            <>
              <div className="flex flex-col space-y-2">
                <h2 className="text-3xl font-bold font-custom_Syne">
                  Resultados
                </h2>
                <h3 className="text-gray-600">Mostrando resultados aquí...</h3>
              </div>

              <div
                className={`rounded-md shadow-md ${
                  isMobileView ? "overflow-x-auto" : "overflow-y-auto"
                }`}
              >
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
                          {
                            id,
                            nombre,
                            componente,
                            descripcion,
                            canEdit,
                            formaFinanciamiento,
                          },
                          index
                        ) => {
                          const isLast = index === displayedRows.length - 1;
                          const classes = isLast
                            ? "p-4"
                            : "p-4 border-b border-blue-gray-50";
                          return (
                            <tr
                              key={index}
                              className={`${
                                index % 2 == 0 ? "bg-yellow-200" : ""
                              }`}
                            >
                              <td className={classes}>
                                <div className="flex items-center gap-3">
                                  <span className="font-normal text-gray-600 text-sm">
                                    {nombre}
                                  </span>
                                </div>
                              </td>
                              <td className={classes}>
                                <span className="font-normal text-gray-600 text-sm">
                                  {nombre}
                                </span>
                              </td>
                              <td className={classes}>
                                <span className="font-normal text-gray-600 text-sm">
                                  {componente}
                                </span>
                              </td>
                              <td className={classes}>
                                <div className="w-max">
                                  {formaFinanciamiento}
                                </div>
                              </td>
                              <td className={classes}>
                                <span className="font-normal text-gray-600 text-sm capitalize">
                                  {descripcion}
                                </span>
                              </td>
                              <td className={classes}>
                                <a
                                  href={`/view?id=${index}`}
                                  className="text-blue-500"
                                >
                                  Leer iniciativa
                                </a>
                              </td>
                              <td className={classes}>
                                {canEdit && (
                                  <div content="Edit User">
                                    <button variant="text">
                                      <PencilIcon className="h-4 w-4" />
                                    </button>
                                  </div>
                                )}
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
                          currentPage >= totalPages
                            ? "opacity-20"
                            : "opacity-100"
                        }`}
                        stroke="black"
                        onClick={handleNextPage}
                        disabled={currentPage >= totalPages}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <h1>No se encontraron resultados</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default TablesInitiatives;
