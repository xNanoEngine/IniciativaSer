import React, { useState } from "react";
import ProgramCards from "./ProgramCards";
import { initiativeProgram } from "../../constants";

const ProgramSeremi = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = window.innerWidth <= 768 ? 1 : 10;

  const nextCard = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % Math.ceil(20 / cardsPerPage));
  };

  const prevCard = () => {
    setCurrentPage(
      (prevPage) =>
        (prevPage - 1 + Math.ceil(20 / cardsPerPage)) %
        Math.ceil(20 / cardsPerPage)
    );
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
            } `}
          >
            <ProgramCards ind={program.name} desc={program.description} />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 space-x-4">
        <button onClick={prevCard}>Prev</button>
        <button onClick={nextCard}>Sig</button>
      </div>
    </div>
  );
};

export default ProgramSeremi;
