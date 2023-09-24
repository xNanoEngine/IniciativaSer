import React, { useState } from "react";
import { up, down } from "../../assets";
const Combobox = ({ data, label, prop }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option.name);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative ${prop}`}>
      <div
        className="bg-white border border-gray-300 rounded-md p-2 cursor-pointer flex flex-row"
        onClick={toggleDropdown}
      >
        {selectedOption || label}
        <img
          src={isOpen ? up : down}
          alt="subLinksMenu"
          className="w-[18px] h-[18px] object-contain ml-auto"
        />
      </div>
      {isOpen && (
        <div className="absolute bg-white border border-gray-300 mt-2 py-2 rounded-md shadow-lg w-full">
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
