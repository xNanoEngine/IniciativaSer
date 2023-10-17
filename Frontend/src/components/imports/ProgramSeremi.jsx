// import React, { useState } from "react";
// import ProgramCards from "./ProgramCards";

// const ProgramSeremi = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const cardsPerPage = 10;

//   const nextCard = () => {
//     setStartIndex((prevStart) => (prevStart + cardsPerPage) % 20);
//   };

//   const prevCard = () => {
//     setStartIndex((prevStart) => (prevStart - cardsPerPage + 20) % 20);
//   };

//   const isMobile = window.innerWidth <= 768;

//   return (
//     <div className="relative">
//       <div className="grid grid-cols-1 md:grid-cols-5 gap-x-4 gap-y-10">
//         {Array(18)
//           .fill()
//           .map((_, index) => (
//             <div
//               key={index}
//               className={`${
//                 index >= startIndex && index < startIndex + cardsPerPage
//                   ? "block"
//                   : "hidden"
//               } `}
//             >
//               <ProgramCards ind={index} />
//             </div>
//           ))}
//       </div>

//       <div className="flex justify-center mt-4 space-x-4">
//         <button onClick={prevCard}>Prev</button>
//         <button onClick={nextCard}>Sig</button>
//       </div>
//     </div>
//   );
// };

// export default ProgramSeremi;
import React, { useState } from "react";
import ProgramCards from "./ProgramCards";

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
        {Array(18)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className={`${
                index >= currentPage * cardsPerPage &&
                index < (currentPage + 1) * cardsPerPage
                  ? "block"
                  : "hidden"
              } `}
            >
              <ProgramCards ind={index} />
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
