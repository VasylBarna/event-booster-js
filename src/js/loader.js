import { refs } from './refs.js';

onSiteOpen();

function onSiteOpen() {
  refs.main.style.height = '100vh';
  document.body.classList.toggle('loader-open');

  setTimeout(() => {
    document.body.classList.toggle('loader-open');
    refs.loader.classList.toggle('is-hidden');
    refs.main.style.removeProperty('height');
  }, 2500);
}

export default function onLoaderActive() {
  document.body.classList.toggle('loader-open');
  refs.loader.classList.toggle('is-hidden');
  refs.cardsList.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

  setTimeout(() => {
    document.body.classList.toggle('loader-open');
    refs.loader.classList.toggle('is-hidden');
  }, 1500);
}

// paginationContainer: document.querySelector('#pagination-container'),
// refs.paginationContainer.addEventListener('click', onPaginationClick);
// allLi.addEventListener('click', onPaginationClick);

// function onPaginationClick(e) {
//   // console.dir(e.target);
//   // console.log(e.target.firstChild);
//   //  || e.target.parentNode.classList.contains('active')
//   if (!e.target.classList.contains('active')) {
//     loader();
//   }
// }

// function loader() {
//   document.body.classList.toggle('loader-open');
//   refs.loader.classList.toggle('is-hidden');
//   refs.cardsList.scrollIntoView({
//     behavior: 'smooth',
//     block: 'start',
//   });

//   setTimeout(() => {
//     document.body.classList.toggle('loader-open');
//     refs.loader.classList.toggle('is-hidden');
//   }, 500);
// }
