import React, { useState, useEffect } from "react";
import {
  PencilIcon,
  TrashIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

import clientAxios from "../config/clienteAxios";

const TablesRecord = ({ currentPage, setCurrentPage }) => {
  const [displayedRows, setDisplayedRows] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const TABLE_HEAD = [
    "Titulo",
    "Componente",
    "Financiamiento",
    "Descripcion",
    "",
    ""
  ];
  const RowsPerPage = 5;

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    try {
      const response = await clientAxios.get(`/iniciativascuenta`, {
        params: {
          Page: currentPage,
          PerPage: RowsPerPage,
          token,
        },
      });
      console.log("Enviando....")
      if (response.status === 200) {
        const data = response.data;
        //const accountId = data.accountId;
        localStorage.setItem("data", JSON.stringify(data.data));
        //setUserId(accountId);
        console.log(data.totalPages);
        setTotalPages(data.totalPages);
        setDisplayedRows(data.results);
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Error al buscar las iniciativas por id de cuenta");
    }
  };


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
  
  const handleOnClick = async (id) => {
    try {
      // Construir la URL del backend con el ID del elemento
      const urlDelBackend = `/iniciativascuenta/${id}`;
      await clientAxios.patch(urlDelBackend, {
      });
      console.log('Solicitud PATCH exitosa');
    } catch (error) {
      console.error('Error al realizar la solicitud PATCH:', error);
    }
    fetchData();
  };

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
                                {(
                                  <div content="Edit Initiative">
                                    <button variant="text">
                                      <PencilIcon
                                        onClick={() =>
                                          navigate(`/initiative?Edit=${id}`)
                                        }
                                        className="h-4 w-4"
                                      />
                                    </button>
                                  </div>
                                )}
                              </td>
                              <td className={classes}>
                                {(
                                  <div content="Delete Initiative">
                                    <button variant="text">
                                      <TrashIcon
                                        onClick={() => handleOnClick(id)}
                                        className="h-4 w-4"  
                                      />
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

//   return (
//     <div>
//       <table className="w-full table-auto text-left ml-4 mt-5">
//         <thead className="border-gray-400 border">
//           <tr>
//             <th className="p-4">Programa</th>
//             <th className="p-4">Iniciativa</th>
//             <th className="p-4">Estado de registro</th>
//             <th className="p-4">{""}</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="border border-gray-400">
//             <td className="p-4">Programa 1</td>
//             <td className="p-4">Iniciativa 1</td>
//             <td className="p-4">Registrado</td>
//             <td className="p-4">
//               <a className="text-blue-500" href="">
//                 ver/Editar
//               </a>
//             </td>
//           </tr>
//           <tr className="border border-gray-400">
//             <td className="p-4">Programa 2</td>
//             <td className="p-4">Iniciativa 2</td>
//             <td className="p-4">Pendiente</td>
//             <td className="p-4">
//               <a className="text-blue-500" href="">
//                 ver/Editar
//               </a>
//             </td>
//           </tr>
//           <tr className="border border-gray-400">
//             <td className="p-4">Programa 3</td>
//             <td className="p-4">Iniciativa 3</td>
//             <td className="p-4">En proceso</td>
//             <td className="p-4">
//               <a className="text-blue-500" href="">
//                 ver/Editar
//               </a>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <div className="w-full flex flex-row items-center justify-between border-t border-blue-gray-50 p-4 select-none">
//         <div className="flex justify-center w-8 h-8 hover:bg-gray-100 hover:rounded-lg">
//           <ChevronLeftIcon
//             className="w-7"
//             stroke="black"
//             onClick={handlePreviousPage}
//           />
//         </div>
//         <div className="flex items-center gap-2 ">
//           {visiblePages.map((page) => (
//             <button
//               key={page}
//               className={`w-8 h-8 ${
//                 page === currentPage
//                   ? "text-white bg-black rounded-md shadow-md text-lg scale-110 transition-transform"
//                   : "text-black scale-100 hover:shadow-md hover:rounded-md"
//               }`}
//               onClick={() => setCurrentPage(page)}
//             >
//               {page}
//             </button>
//           ))}
//         </div>
//         <div
//           className={`flex justify-center w-8 h-8 ${
//             currentPage >= totalPages
//               ? ""
//               : "hover:bg-gray-100 hover:rounded-lg"
//           }`}
//         >
//           <ChevronRightIcon
//             className={`w-7 ${
//               currentPage >= totalPages ? "opacity-20" : "opacity-100"
//             }`}
//             stroke="black"
//             onClick={handleNextPage}
//             disabled={currentPage >= totalPages}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

export default TablesRecord;
