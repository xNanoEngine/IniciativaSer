import React, { useState } from "react";
import { down } from "../../assets";

const Combobox = ({ data, label, prop, onChange, error }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option.name);
    setIsOpen(false);
    onChange(option.name); // Llama a la función de devolución de llamada con la opción seleccionada
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative ${prop}`}>
      <div
        className={`bg-white border items-center ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md p-2 cursor-pointer flex flex-row`}
        onClick={toggleDropdown}
      >
        <span className="whitespace-nowrap truncate">
          {selectedOption || label}
        </span>
        <span
          className={`ml-auto float-right transform ${
            isOpen ? "scale-y-[-1]" : "scale-y-[1]"
          } transition-transform duration-300`}
        >
          <img
            src={down}
            alt="subLinksMenu"
            className="w-4 h-4 object-contain"
          />
        </span>
      </div>
      {error && <div className="text-red-500 mt-1 text-sm">{error}</div>}
      {isOpen && (
        <div className="absolute bg-white border border-gray-300 mt-2 py-2 rounded-md shadow-lg w-fit max-h-[200px] overflow-y-auto">
          {data.map((option, index) => (
            <div
              key={option.name || index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:transition-all hover:ease-in-out hover:text-base hover:font-bold"
              onClick={() => handleOptionClick(option)}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Combobox;
