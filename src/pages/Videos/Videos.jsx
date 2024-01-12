import React from "react";
import { useQuery } from "react-query";
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
  } = useQuery(["videos", filter], async () => youtube.search(filter), {
    staleTime: 1000 * 60 * 5,
  });

  return (
    <section style={{ width: "100%", height: "100vh" }}>
      <PlayBanner filter={filter} />
      {videos && <VIdeoSlider videos={videos} />}
      {isLoading && <p>Loading...</p>}
      {error && <p>error!</p>}
    </section>
  );
}
