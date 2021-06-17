import eventCardsTpl from '../templates/eventCardsTpl.hbs';
import templateMany from '../templates/templateCountry.hbs';
import isoCountries from '../js/isoCountry.js';
import { refs } from '../js/refs';
import SearchService from './api_service';
import debounce from 'lodash.debounce';
import onFetchError from '../js/pnotify.js';
const searchService = new SearchService();


refs.inputRef.addEventListener('input', debounce(fetchData, 1500));
refs.selectRef.addEventListener('change', debounce(fetchCountry, 1500));

function fetchData() {
  searchService.searchQuery = this.value.trim();

  searchService.fetchApiEvent().then(renderData);
}

function renderData(dataRender) {
  console.log(dataRender);
  if (!dataRender) {
    console.log(onFetchError);
    onFetchError.onFetchError();
    
  }
  var markup = eventCardsTpl(dataRender);
  $('#data-container').html(markup);
}

function fetchCountry(e) {
  searchService.country = Object.entries(isoCountries)[e.target.selectedIndex - 1][0];
  searchService.fetchApiEvent().then(renderData);
}

renderCountries();
function renderCountries() {
  const markupCountries = templateMany(isoCountries);
  refs.optionRef.insertAdjacentHTML('afterend', markupCountries);
}
