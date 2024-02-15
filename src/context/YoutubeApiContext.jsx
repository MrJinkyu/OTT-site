import { createContext, useContext } from "react";
import Youtube from "../apis/youtube.js";
import MockYoutubeClient from "../apis/mockYoutubeClient.js";
// import FakeYoutubeClient from "../apis/fakeYoutubeClient.js";
// import YoutubeClient from "../apis/youtubeClient.js";

const YoutubeApiContext = createContext();

// const client = new FakeYoutubeClient();
// const client = new YoutubeClient();
const client = new MockYoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
