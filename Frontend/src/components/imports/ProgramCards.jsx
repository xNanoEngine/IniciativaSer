import React from "react";
import blankImage from "../../assets/blankImage.jpg";
const ProgramCards = (props) => {
  return (
    <div className="flex flex-col w-56 h-full shadow-lg rounded-md border-2 border-black md:transition-all md:ease-in-out md:hover:scale-110 ">
      <div className="">
        <div className="w-full">
          {" "}
          <img src={blankImage} alt="" />
          {/* Aqui ira la imagen */}
        </div>
        <div className="flex flex-col mx-4 my-2 space-y-5">
          <div className="mt-5">
            <h1 className="text-lg">{props.ind}</h1>
            {/* Aquí ira el programa */}
          </div>
          <div className="programDescription">
            <div className="line-clamp-6 text-justify	">
              Acciona es uno de los programas mas reconocidos a nivel pais, en
              el se pueden destacar diferentes proyectos como por ejemplo:
              Proyecto Seremi Cultura, Proyecto arboles UACH, entre otros.
            </div>
            {/* Aqui ira la descripción */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCards;
