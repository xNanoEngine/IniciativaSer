import React, { useState } from "react";
import ProgramCards from "./ProgramCards";
import { initiativeProgram } from "../../constants";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

const ProgramSeremi = () => {
  const [currentPage, setCurrentPage] = useState(0);
  let cardsPerPage;
  if (window.innerWidth <= 768) {
    cardsPerPage = 1;
  } else {
    cardsPerPage = 10;
  }

  const totalPages = Math.ceil(initiativeProgram.length / cardsPerPage);

  const pagesToShow = 2; // Cantidad de páginas a mostrar en la paginación

  // Calcular los índices de inicio y fin del rango de páginas
  let startPage = currentPage - pagesToShow;
  let endPage = currentPage + pagesToShow;

  if (startPage < 0) {
    startPage = 0;
    endPage = Math.min(2 * pagesToShow, totalPages - 1);
  }

  if (endPage >= totalPages) {
    endPage = totalPages - 1;
    startPage = Math.max(totalPages - 2 * pagesToShow, 0);
  }

  const nextCard = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const prevCard = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-x-4 gap-y-10">
        {initiativeProgram.map((program, index) => (
          <div
            key={index}
            className={`${
              index >= currentPage * cardsPerPage &&
              index < (currentPage + 1) * cardsPerPage
                ? "block"
                : "hidden"
            }`}
          >
            <ProgramCards ind={program.name} desc={program.description} />
          </div>
        ))}
      </div>
      <div className="w-full flex flex-row mt-10 items-center justify-between select-none">
        <div className="flex justify-center w-8 h-8 hover:bg-gray-100 hover:rounded-lg">
          <ChevronLeftIcon className="w-7" stroke="black" onClick={prevCard} />
        </div>
        <div className="flex items-center gap-2 ">
          {[...Array(totalPages).keys()]
            .slice(startPage, endPage + 1)
            .map((page) => (
              <button
                key={page}
                className={`w-8 h-8 ${
                  page === currentPage
                    ? " text-white bg-black rounded-md shadow-md text-lg scale-110 transition-transform "
                    : "text-black scale-100 hover:shadow-md hover:rounded-md"
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page + 1}
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
            onClick={nextCard}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgramSeremi;
