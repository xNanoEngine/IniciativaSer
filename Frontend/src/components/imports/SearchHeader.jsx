import React from "react";

const SearchHeader = ({ title, desc }) => {
  return (
    <section className="sm:py-16 py-6 flex justify-center flex-col bg-slate-100 w-screen border-b-black border-b-2">
      <div className="flex justify-center sm:mb-16 mb-6 z-[1] text-center">
        <h1 className="leading-tight">{title}</h1>
      </div>
      <div className="mx-auto text-center text-sm w-full line-clamp-6 md:w-2/5 md:line-clamp-6 md:text-lg">
        {desc}
      </div>
    </section>
  );
};

export default SearchHeader;
