import './sass/main.scss';
import { refs } from './js/refs';
import './js/events__modal';
import eventCardsTpl from './templates/eventCardsTpl.hbs';
import SearchService from './js/api_service';
import './js/pagination.js';

const searchService = new SearchService();

searchService
  .fetchApiEvent()
  .then(data => eventCardsTpl(data))
  .then(markup => refs.cardsList.insertAdjacentHTML('beforeend', markup));
