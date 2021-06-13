import * as pagination from 'paginationjs';
import cardsTmp from '../templates/eventCardsTpl.hbs';

const eventsContainer = document.querySelector('#data-container');

// $('#pagination-container').pagination({
//   pageSize: 20,
//   showPrevious: false,
//   showNext: false,

//   dataSource: function (done) {
//     $.ajax({
//       type: 'GET',
//       url: `https://app.ticketmaster.com/discovery/v2/events.json?source=universe&apikey=t9AQpoYkrEtRVSYxwnNseTc1nTuCbUhF`,
//       success: function (response) {
//         eventsContainer.innerHTML = '';
//         if (response._embedded) {
//           console.log(response._embedded.events);
//           done(response._embedded.events);
//         } else {
//           alert('Введи что-то нормальное!');
//         }
//       },
//     });
//   },

//   callback: function (data, pagination) {
//     var markup = cardsTmp(data);
//     $('#data-container').html(markup);
//   },
// });
