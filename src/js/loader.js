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
}
