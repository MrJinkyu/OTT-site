import React, { useState } from "react";
import { useQuery } from "react-query";
import styles from "./Videos.module.css";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useYoutubeApi } from "../../context/YoutubeApiContext";
import { useFilter } from "../../context/FilterContext";
import PlayBanner from "../../components/PlayBanner/PlayBanner";
import VIdeoSlider from "../../components/VideoSlider/VIdeoSlider";

export default function Videos() {
  const { youtube } = useYoutubeApi();
  const { filter } = useFilter();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", filter], async () => youtube.search(filter));

  return (
    <section className={styles.container}>
      <PlayBanner filter={filter} />
      {videos && <VIdeoSlider videos={videos} />}
      {isLoading && <p>Loading...</p>}
      {error && <p>error!</p>}
    </section>
  );
}
