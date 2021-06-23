import templateMany from '../templates/templateCountry.hbs';
import isoCountries from '../js/isoCountry.js';
import { refs } from '../js/refs';
import SearchService from './api_service';
import { pnotifyError } from '../js/pnotify.js';
import paginationCreate from '../js/pagination.js';
import loader from './loader.js';
const searchService = new SearchService();
refs.formRef.addEventListener('submit', fetchData);
refs.selectRef.addEventListener('change', fetchCountry);

function fetchData(e) {
  e.preventDefault();
  searchService.searchQuery = refs.inputRef.value.trim();

  loader();
  searchService.fetchApiEvent().then(renderData);
}

function renderData(dataRender) {
  if (!dataRender) {
    pnotifyError(`Sorry, but we haven't found any events for your request`);
    refs.dataContainer.innerHTML = '';
    refs.paginationContainer.innerHTML = `<h2 class="pagination-error">Sorry, but we haven't found any events for your request</h2>`;
    refs.footer.style.position = 'fixed';
    refs.footer.style.bottom = 0;
  } else {
    refs.paginationContainer.innerHTML = '';
    refs.footer.style.position = '';
    refs.footer.style.bottom = '';
    paginationCreate(dataRender);
  }

  document.body.classList.toggle('loader-open');
  refs.loader.classList.toggle('is-hidden');
  refs.cardsList.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
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

export { fetchData };
