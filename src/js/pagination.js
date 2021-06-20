import { data } from 'browserslist';
import * as pagination from 'paginationjs';
import onFetchError from './pnotify.js';
import cardsTmp from '../templates/eventCardsTpl.hbs';
import SearchService from './api_service.js';

const fetchService = new SearchService();

fetchService.fetchApiEvent().then(data => {
  if (!data) {
    onFetchError('No events found');
  }
  paginationCreate(data);
});

// onFetchTake();

// function onFetchTake() {
//   fetchService.fetchApiEvent().then(data => paginationCreate(data));
// }

// loadMorePages();
// function loadMorePages() {
//   fetchService.incrementPage();
//   onFetchTake();
// }

export default function paginationCreate(items) {
  $('#pagination-container').pagination({
    pageSize: 20,
    showPrevious: false,
    showNext: false,
    dataSource: items,

    // dataSource: function (done) {
    //   $.ajax({
    //     type: 'GET',
    //     url: `https://app.ticketmaster.com/discovery/v2/events.json?size=200&source=universe&apikey=t9AQpoYkrEtRVSYxwnNseTc1nTuCbUhF`,
    //     success: function (response) {
    //       eventsContainer.innerHTML = '';
    //       if (response._embedded) {
    //         console.log(response._embedded.events);
    //         done(response._embedded.events);
    //       } else {
    //         alert('Введи что-то нормальное!');
    //       }
    //     },
    //   });
    // },

    callback: function (data, pagination) {
      var markup = cardsTmp(data);
      $('#data-container').html(markup);
    },
  });
}
