import React from "react";
import styles from "./PlayBanner.module.css";

export default function PlayBanner({ id, filter }) {
  return (
    <section className={styles.banner}>
      <div className={styles.info}>
        <div className={styles.title}>OTT {filter}</div>
        <button className={styles.playBtn}>Play</button>
      </div>
      <div className={styles.preview}>
        <div className={styles.hideTop}></div>
        <iframe
          id="player"
          type="text/html"
          src={`http://www.youtube.com/embed/${id}?autoplay=1&mute=1`}
          style={{
            border: "none",
            width: "100%",
            height: "100%",
          }}
          title={id}
          controls="0"
        />
        <div className={styles.hideBottom}></div>
      </div>
    </section>
  );
}
