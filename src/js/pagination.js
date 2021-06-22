import { data } from 'browserslist';
import * as pagination from 'paginationjs';
import { pnotifyError } from './pnotify.js';
import cardsTmp from '../templates/eventCardsTpl.hbs';
import SearchService from './api_service.js';

const fetchService = new SearchService();

fetchService.fetchApiEvent().then(data => {
  if (!data) {
    pnotifyError(`Sorry, but we haven't found any events for your request`);
  }
  paginationCreate(data);
});

export default function paginationCreate(items) {
  $('#pagination-container').pagination({
    pageSize: 20,
    showPrevious: false,
    showNext: false,
    dataSource: items,

    callback: function (data, pagination) {
      var markup = cardsTmp(data);
      $('#data-container').html(markup);
    },
  });
}
