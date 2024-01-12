import React from "react";
import styles from "./VideoCard.module.css";
import { useFilter } from "../../context/FilterContext";

export default function VideoCard({ video }) {
  const { selectId, onChangeId } = useFilter();
  const { thumbnails } = video.snippet;
  return (
    <div
      className={`${styles.card} ${selectId === video.id && styles.active}`}
      onClick={() => onChangeId(video.id)}
    >
      <img
        className={styles.img}
        src={thumbnails.medium.url}
        alt="thumbnails_image"
      />
    </div>
  );
}
