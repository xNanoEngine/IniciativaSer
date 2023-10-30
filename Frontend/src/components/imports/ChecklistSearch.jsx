import React, { useState, useEffect } from "react";

const ChecklistSearch = ({ data, type, singleSelect, onSelectionChange }) => {
  const [open, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleItem = (itemName) => {
    if (singleSelect) {
      if (selectedItems.includes(itemName)) {
        setSelectedItems([]);
        onSelectionChange([]);
        setOpen(false);
      } else {
        setSelectedItems([itemName]);
        onSelectionChange([itemName]);
        setOpen(true);
      }
    } else {
      setSelectedItems((prevSelected) => {
        let updatedSelected;
        if (prevSelected.includes(itemName)) {
          updatedSelected = prevSelected.filter((item) => item !== itemName);
        } else {
          updatedSelected = [...prevSelected, itemName];
        }

        onSelectionChange(updatedSelected);
        return updatedSelected;
      });
    }
  };

  const isItemSelected = (itemName) => selectedItems.includes(itemName);

  return (
    <div className="w-full border-b-2 border-black">
      <button
        className="w-full flex items-center "
        onClick={() => setOpen(!open)}
      >
        {open ? "- " : "+ "}
        {type}
      </button>

      <div
        className={`my-2 transition-all duration-300 ease-in-out   ${
          open
            ? "max-h-screen opacity-100 overflow-scroll"
            : "overflow-hidden opacity-0 max-h-0"
        }`}
      >
        {data.map(({ name }, index) => (
          <div className="flex flex-row ml-4 space-x-2" key={index}>
            <input
              type="checkbox"
              name=""
              id={index}
              checked={isItemSelected(name)}
              onChange={() => toggleItem(name)}
            />
            <span> {name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChecklistSearch;
