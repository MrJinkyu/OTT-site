import React from "react";
import styles from "./FilterButton.module.css";
import { useFilter } from "../../context/FilterContext";

export default function FilterButton({ value, children }) {
  const { filter, onFilterChange } = useFilter();
  return (
    <button
      onClick={() => onFilterChange(value)}
      className={`${styles.item} ${value === filter && styles.selected}`}
    >
      {children}
    </button>
  );
}
