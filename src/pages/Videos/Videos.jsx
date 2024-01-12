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
  const selectId = onSelectedId(videos);
  const [id, setId] = useState(selectId);
  return (
    <section className={styles.container}>
      <PlayBanner id={id} filter={filter} />
      {videos && (
        <VIdeoSlider videos={videos} onChangeId={setId} selectId={id} />
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>error!</p>}
    </section>
  );
}

function onSelectedId(videos) {
  if (videos) {
    return videos[0];
  }
  return "lQZC0NYdLW8";
}
