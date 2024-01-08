import React from "react";
import { Link } from "react-router-dom";
import { FaVideo } from "react-icons/fa6";
import { RiGhostSmileFill } from "react-icons/ri";
import { MdSportsVolleyball } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa6";
import styles from "./NavHeader.module.css";

export default function NavHeader() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <h1 className={styles.title}>OverTheTop</h1>
      </Link>
      <nav className={styles.menu}>
        <button className={styles.item}>
          <FaVideo className={styles.icon} />
          <span className={styles.category}>영화</span>
        </button>
        <button className={styles.item}>
          <RiGhostSmileFill className={styles.icon} />
          <span className={styles.category}>애니메이션</span>
        </button>
        <button className={styles.item}>
          <MdSportsVolleyball className={styles.icon} />
          <span className={styles.category}>스포츠</span>
        </button>
        <button className={styles.item}>
          <FaNewspaper className={styles.icon} />
          <span className={styles.category}>뉴스</span>
        </button>
      </nav>
    </header>
  );
}
