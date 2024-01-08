import React from "react";
import { useQuery } from "react-query";
import styles from "./Videos.module.css";
import VideoCard from "../../components/VideoCard/VideoCard";

export default function Videos() {
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos"], async () => {
    return fetch("/data/movie.json")
      .then((res) => res.json())
      .then((data) => data.items);
  });
  return (
    <>
      <ul className={styles.videos}>
        {isLoading && <p>Loading...</p>}
        {error && <p>error!</p>}
        {videos &&
          videos.map((video) => {
            return <VideoCard key={video.id.videoId} video={video} />;
          })}
      </ul>
    </>
  );
}
