import React from "react";
import styles from "./VideoCard.module.css";

export default function VideoCard({ video, onChangeId, selectId }) {
  const { thumbnails } = video.snippet;
  return (
    <li
      className={`${styles.card} ${selectId === video.id && styles.active}`}
      onClick={() => onChangeId(video.id)}
    >
      <img
        className={styles.img}
        src={thumbnails.medium.url}
        alt="thumbnails_image"
      />
    </li>
  );
}
