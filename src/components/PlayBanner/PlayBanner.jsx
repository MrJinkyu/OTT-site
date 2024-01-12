import React from "react";
import styles from "./PlayBanner.module.css";
import { useFilter } from "../../context/FilterContext";
import { useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
export default function PlayBanner() {
  const { selectId, filter } = useFilter();
  const navigate = useNavigate();
  return (
    <section className={styles.banner}>
      <div className={styles.info}>
        <p className={styles.title}>OTT {filter}</p>
        {selectId && (
          <button
            className={styles.playBtn}
            onClick={() => navigate(`/videos/watch/${selectId}`)}
          >
            <FaPlay className={styles.playIcon} /> <span>재생하기</span>
          </button>
        )}
      </div>
      <div className={styles.preview}>
        {selectId && <div className={styles.hideTop}></div>}
        {!selectId && (
          <img
            src={`/img/${filter}.jpg`}
            alt="기본이미지"
            className={styles.img}
          />
        )}
        {selectId && (
          <iframe
            id="player"
            type="text/html"
            src={`http://www.youtube.com/embed/${selectId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${selectId}`}
            style={{
              border: "none",
              width: "100%",
              height: "100%",
            }}
            title={selectId}
            controls="0"
          />
        )}
        {selectId && <div className={styles.hideBottom}></div>}
      </div>
    </section>
  );
}
