import React from "react";

export default function VideoCard({ video }) {
  const { thumbnails } = video.snippet;
  return (
    <li>
      <img src={thumbnails.medium.url} alt="thumbnails_image" />
    </li>
  );
}
