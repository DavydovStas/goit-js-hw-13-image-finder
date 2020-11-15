export default class ImagesApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.BASE_URL = 'https://pixabay.com/api';
    this.API_KEY = "19081920-2c3ac78229fa04ecd1a30d4e6";
  }

  async fetchArticles() {
    const url =`${this.BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.API_KEY}`

    const response = await fetch(url);
    const images = response.json().then(({ hits }) => { this.incrementPage(); return hits; });
    return  images
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

}