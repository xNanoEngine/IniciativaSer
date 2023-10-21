import { useState } from "react";

const ChecklistSearch = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="w-full border-b-2 border-black">
      <button
        className="w-full flex items-center "
        onClick={() => setOpen(!open)}
      >
        {open ? "- " : "+ "}Iniciativa
      </button>

      <div
        className={`my-2 transition-all duration-300 ease-in-out   ${
          open
            ? "max-h-screen opacity-100 overflow-scroll"
            : "overflow-hidden opacity-0 max-h-0"
        }`}
      >
        <div className="flex flex-row ml-4 space-x-2">
          <input type="checkbox" name="" id="" />
          <span> Nombre</span>
        </div>
        <div className="flex flex-row ml-4 space-x-2">
          <input type="checkbox" name="" id="" />
          <span> Nombre</span>
        </div>
        <div className="flex flex-row ml-4 space-x-2">
          <input type="checkbox" name="" id="" />
          <span> Nombre</span>
        </div>
      </div>
    </div>
  );
};

export default ChecklistSearch;
