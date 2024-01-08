import React from "react";
import styles from "./VideoCard.module.css";

export default function VideoCard({ video }) {
  const { thumbnails } = video.snippet;
  return (
    <li className={styles.card}>
      <img
        className={styles.img}
        src={thumbnails.medium.url}
        alt="thumbnails_image"
      />
    </li>
  );
}
