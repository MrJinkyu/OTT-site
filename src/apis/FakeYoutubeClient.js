export default class FakeYoutubeClient {
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
  async #getMovie() {
    return fetch("/data/movie.json");
  }
  async #getAnimation() {
    return fetch("/data/animation.json");
  }
  async #getNews() {
    return fetch("/data/news.json");
  }
  async #getSports() {
    return fetch("/data/sports.json");
  }
}
