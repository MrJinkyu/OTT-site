import { createContext, useContext } from "react";
import { useState } from "react";
const FilterContext = createContext();

export function FilterContextProvider({ children }) {
  const [filter, setFilter] = useState("movie");
  const [id, setId] = useState(undefined);
  return (
    <FilterContext.Provider
      value={{
        filter,
        onFilterChange: setFilter,
        selectId: id,
        onChangeId: setId,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  return useContext(FilterContext);
}
