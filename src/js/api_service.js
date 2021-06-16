const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';
const KEY = 't9AQpoYkrEtRVSYxwnNseTc1nTuCbUhF';

export default class SearchService {
  constructor() {
    this.searchQuery = '';
    this.page = 0;
    this.country = '';
  }
  async fetchApiEvent() {
    const url = `${BASE_URL}/events?keyword=${this.searchQuery}&apikey=${KEY}&countryCode=${this.country}&size=200&page=${this.page}`;
    // &page=${this.page}
    // console.log(this);
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data); //Нам приходит массив объектов из _embedded
    const { _embedded } = data;
    //console.log(_embedded.events);
    // const allEvents = _embedded.events;
    // const totalPages = page.totalPages;

    return _embedded ? _embedded.events: null;
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
