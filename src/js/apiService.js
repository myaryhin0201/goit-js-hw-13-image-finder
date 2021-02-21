import axios from 'axios';
const myKey = `20359490-f2da25da5356f05e90d2084aa`;
axios.defaults.baseURL = `https://pixabay.com/api`;
export const apiService = {
  searchQuery: '',
  page: 1,
  async fetchGallery() {
    try {
      const { data, status } = await axios.get(`?key=${myKey}&image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12`);
      if (status !== 200) {
        throw new Error('Serve is dead');
      }
      if (data.hits.length === 0) {
        throw new Error('Nothing found!');
      }
      this.page += 1;
      return data.hits;
    } catch (error) {
      throw error;
    }
  },
  resetPage() {
    this.page = 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
