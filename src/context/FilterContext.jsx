import { createContext, useContext } from "react";
import { useState } from "react";
const FilterContext = createContext();

export function FilterContextProvider({ children }) {
  const [filter, setFilter] = useState("movie");
  return (
    <FilterContext.Provider value={{ filter, onFilterChange: setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  return useContext(FilterContext);
}
