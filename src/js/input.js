//import eventCardsTpl from '../templates/eventCardsTpl.hbs';
import templateMany from '../templates/templateCountry.hbs';
import isoCountries from '../js/isoCountry.js';
import { refs } from '../js/refs';
import SearchService from './api_service';
//import debounce from 'lodash.debounce';
import onFetchError from '../js/pnotify.js';
import paginationCreate from '../js/pagination.js';
import loader from './loader.js';
const searchService = new SearchService();
refs.formRef.addEventListener('submit', fetchData);
//refs.inputRef.addEventListener('input', debounce(fetchData, 1500));
refs.selectRef.addEventListener('change', fetchCountry);

function fetchData(e) {
  e.preventDefault();
  searchService.searchQuery = refs.inputRef.value.trim();

  loader();


//refs.buttonRef.addEventListener('onclick', fetchData);
//refs.inputRef.addEventListener('input', debounce(fetchData, 1500));
//refs.selectRef.addEventListener('change', debounce(fetchCountry, 1500));

//function fetchData() {
  //console.log("fetchData");
  //searchService.searchQuery = '';
  searchService.fetchApiEvent()
  .then(renderData);
}

function renderData(dataRender) {
  console.log(dataRender);
  if (!dataRender) {
    onFetchError.onFetchNotice('No events found');
    $('#data-container').html('');
  } else {
    paginationCreate(dataRender);
  }

  document.body.classList.toggle('loader-open');
  refs.loader.classList.toggle('is-hidden');
  refs.cardsList.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
  //var markup = eventCardsTpl(dataRender);
  //$('#data-container').html(markup);
}

function fetchCountry(e) {
  searchService.country = Object.entries(isoCountries)[e.target.selectedIndex - 1][0];
  searchService.fetchApiEvent().then(renderData);

  document.body.classList.toggle('loader-open');
  refs.loader.classList.toggle('is-hidden');
  refs.cardsList.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

renderCountries();
function renderCountries() {
  const markupCountries = templateMany(isoCountries);
  refs.optionRef.insertAdjacentHTML('afterend', markupCountries);
}
