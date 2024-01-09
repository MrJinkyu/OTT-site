import React, { useState } from "react";
import { useQuery } from "react-query";
import styles from "./Videos.module.css";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useYoutubeApi } from "../../context/YoutubeApiContext";
import { useFilter } from "../../context/FilterContext";
import PlayBanner from "../../components/PlayBanner/PlayBanner";

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
    <>
      <PlayBanner id={id} filter={filter} />
      <ul className={styles.videos}>
        {isLoading && <p>Loading...</p>}
        {error && <p>error!</p>}
        {videos &&
          videos.map((video) => {
            return (
              <VideoCard
                key={video.id}
                video={video}
                onChangeId={setId}
                selectId={id}
              />
            );
          })}
      </ul>
    </>
  );
}

function onSelectedId(videos) {
  if (videos) {
    return videos[0];
  }
  return "lQZC0NYdLW8";
}
