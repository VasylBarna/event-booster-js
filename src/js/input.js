import eventCardsTpl from '../templates/eventCardsTpl.hbs';
import templateMany from '../templates/templateCountry.hbs';
import isoCountries from '../js/isoCountry.js';
//import { refs } from './js/refs';
import SearchService from './api_service';
import debounce from 'lodash.debounce';
const searchService = new SearchService();

const inputRef = document.querySelector('.input');
//const eventList = document.querySelector('.cards-list');
const optionRef = document.querySelector('.country-option');
const selectRef = document.querySelector('.select-country');
inputRef.addEventListener('input', debounce(fetchData, 500));
selectRef.addEventListener('change', debounce(fetchCountry, 500));

function fetchData() {
  searchService.searchQuery = this.value;

  searchService.fetchApiEvent().then(renderData);
}

function renderData(dataRender) {
  console.log(dataRender);
  if (!renderData) {
    //To Do:swowAlert.here
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
  optionRef.insertAdjacentHTML('afterend', markupCountries);
}
