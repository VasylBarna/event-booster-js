const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';
const KEY = 't9AQpoYkrEtRVSYxwnNseTc1nTuCbUhF';

export default class SearchService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.country = '';
  }
  async fetchApiEvent() {
    const url = `${BASE_URL}/events?keyword=${this.searchQuery}&apikey=${KEY}&countryCode=${this.country}&page=${this.page}&source=universe`;
    // &page=${this.page}
    // console.log(this);
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data); //Нам приходит массив объектов из _embedded
    const { _embedded } = data;
    console.log(_embedded.events);
    return _embedded.events;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}

// Это надо будет перенести в файл js, где будет писать Ира функцию для инпута
// const searchService = new SearchService();
// searchService.fetchApiEvent();
