export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(category) {
    return this.apiClient
      .searchByCategory(category)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("데이터를 가져오는데 실패");
        }
        return res.json();
      })
      .then((data) => data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })))
      .catch((error) => console.log(error.message));
  }
}
