import React from "react";
import ChecklistSearch from "./ChecklistSearch";
const FilterSearch = ({ filters, onSelectionChange, reference, subTitle }) => {
  return (
    <div className="flex flex-col space-y-6 md:w-1/6">
      <div className="flex flex-row space-x-3 text-xs font-custom_Syne text-gray-400 xl:text-base">
        <a href="/home">Home</a>
        <p>/</p>
        <a href={reference}>{subTitle}</a>
      </div>
      <h1 className="text-2xl">Filtrar por</h1>
      <div className="justify-normal space-y-4">
        {filters.map((filter) => (
          <ChecklistSearch
            key={filter.type}
            data={filter.data}
            type={filter.type}
            singleSelect={filter.singleSelect}
            onSelectionChange={(selectedItems) =>
              onSelectionChange(filter.type, selectedItems)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default FilterSearch;
