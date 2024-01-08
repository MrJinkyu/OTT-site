import React from "react";
import { useQuery } from "react-query";
import styles from "./Videos.module.css";
import VideoCard from "../../components/VideoCard/VideoCard";
import FakeYoutubeClient from "../../apis/fakeYoutubeClient";
import Youtube from "../../apis/youtube";
// import YoutubeClient from "../../apis/youtubeClient";
export default function Videos() {
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos"], async () => {
    const client = new FakeYoutubeClient();
    // const client = new YoutubeClient();
    const youtube = new Youtube(client);
    return youtube.search("movie");
  });
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
