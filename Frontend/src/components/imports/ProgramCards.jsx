import React from "react";
import { useFilterContext } from "../../context/filters";
import { useNavigate } from "react-router-dom";
import blankImage from "../../assets/blankImage.jpg";

const ProgramCards = (props) => {
  const { setBusqueda, updateFilters } = useFilterContext();
  const navigate = useNavigate();

  const handleClick = () => {
    setBusqueda(props.ind);
    updateFilters({ Iniciativa: ["Programa"] });
    navigate("/search");
  };

  return (
    <div
      className="flex flex-col w-56 h-full shadow-lg rounded-md border-2 border-black md:transition-all md:ease-in-out md:hover:scale-110 "
      onClick={handleClick}
    >
      <div className="">
        <div className="w-full">
          {" "}
          <img src={props.imagen} alt="" />
        </div>
        <div className="flex flex-col mx-4 my-2 space-y-5">
          <div className="mt-5">
            <h1 className="text-lg">{props.ind}</h1>
          </div>
          <div className="programDescription">
            <div className="line-clamp-6 text-justify	">{props.desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCards;
