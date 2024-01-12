import React from "react";
import { Link } from "react-router-dom";
import { FaVideo } from "react-icons/fa6";
import { RiGhostSmileFill } from "react-icons/ri";
import { MdSportsVolleyball } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa6";
import styles from "./NavHeader.module.css";
import FilterButton from "../FilterButton/FilterButton";
import { useFilter } from "../../context/FilterContext";

export default function NavHeader() {
  const { onFilterChange } = useFilter();
  return (
    <header className={styles.header}>
      <Link
        to="/"
        className={styles.logo}
        onClick={() => onFilterChange("movie")}
      >
        <h1 className={styles.title}>OverTheTop</h1>
      </Link>
      <nav className={styles.menu}>
        <FilterButton value="movie">
          <FaVideo className={styles.icon} />
          <span className={styles.category}>영화</span>
        </FilterButton>
        <FilterButton value="animation">
          <RiGhostSmileFill className={styles.icon} />
          <span className={styles.category}>애니메이션</span>
        </FilterButton>
        <FilterButton value="sports">
          <MdSportsVolleyball className={styles.icon} />
          <span className={styles.category}>스포츠</span>
        </FilterButton>
        <FilterButton value="news">
          <FaNewspaper className={styles.icon} />
          <span className={styles.category}>뉴스</span>
        </FilterButton>
      </nav>
    </header>
  );
}
