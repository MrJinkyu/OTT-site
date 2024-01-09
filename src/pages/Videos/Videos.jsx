import React from "react";
import { useQuery } from "react-query";
import styles from "./Videos.module.css";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useYoutubeApi } from "../../context/YoutubeApiContext";
import { useFilter } from "../../context/FilterContext";

export default function Videos() {
  const { youtube } = useYoutubeApi();
  const { filter } = useFilter();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", filter], async () => youtube.search(filter));
  return (
    <>
      <ul className={styles.videos}>
        {isLoading && <p>Loading...</p>}
        {error && <p>error!</p>}
        {videos &&
          videos.map((video) => {
            return <VideoCard key={video.id} video={video} />;
          })}
      </ul>
    </>
  );
}
