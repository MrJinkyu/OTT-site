import React from "react";
import { useFilter } from "../../context/FilterContext";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./VideoDetail.module.css";
import { useNavigate } from "react-router-dom";
export default function VideoDetail() {
  const { selectId } = useFilter();
  const navigate = useNavigate();
  return (
    <section className={styles.container}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        <FaArrowLeft />
        <span className={styles.backText}>뒤로가기</span>
      </button>
      <iframe
        id="player"
        type="text/html"
        src={`https://www.youtube.com/embed/${selectId}`}
        style={{
          border: "none",
          width: "80%",
          height: "100%",
        }}
        title={selectId}
        controls="0"
      />
    </section>
  );
}
