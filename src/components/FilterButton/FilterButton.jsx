import React from "react";
import styles from "./FilterButton.module.css";
import { useFilter } from "../../context/FilterContext";

export default function FilterButton({ value, children }) {
  const { filter, onFilterChange, onChangeId } = useFilter();
  return (
    <button
      onClick={() => {
        onFilterChange(value);
        onChangeId(undefined);
      }}
      className={`${styles.item} ${value === filter && styles.selected}`}
    >
      {children}
    </button>
  );
}
