export default class YoutubeClient {
  constructor() {
    this.baseURL =
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&";
    this.key = process.env.REACT_APP_YOUTUBE_API_KEY;
  }
  async searchByCategory(category) {
    if (category === "movie") {
      return this.#getMovie();
    } else if (category === "animation") {
      return this.#getAnimation();
    } else if (category === "news") {
      return this.#getNews();
    } else if (category === "sports") {
      return this.#getSports();
    }
  }
  #getMovie(options) {
    return fetch(`${this.baseURL}q=넷플릭스 영화&key=${this.key}`);
  }
  #getAnimation(options) {
    return fetch(`${this.baseURL}q=애니메이션&key=${this.key}`);
  }
  #getNews(options) {
    return fetch(`${this.baseURL}q=뉴스&key=${this.key}`);
  }
  #getSports(options) {
    return fetch(`${this.baseURL}q=스포츠&key=${this.key}`);
  }
}
