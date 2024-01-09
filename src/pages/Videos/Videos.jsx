import React from "react";
import { useQuery } from "react-query";
import styles from "./Videos.module.css";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useYoutubeApi } from "../../context/YoutubeApiContext";

export default function Videos() {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos"], async () => youtube.search("movie"));
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
