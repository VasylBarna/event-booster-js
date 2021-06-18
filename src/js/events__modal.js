import SearchService from './api_service';
import { refs } from './refs';
import eventsModalTpl from '../templates/events__modal.hbs';

export default (() => {
  refs.eventsOpenModalBtn.addEventListener('click', onOpenModal);
  refs.eventCloseModalBtn.addEventListener('click', onCloseModal);

  function onOpenModal() {
    document.body.classList.add('events-modal-open');
    refs.eventsModal.classList.remove('is-hidden-events');

    window.addEventListener('keydown', onKeydownClose);
    refs.eventsModal.addEventListener('click', onOverlay);
  }

  function onCloseModal() {
    document.body.classList.remove('events-modal-open');
    refs.eventsModal.classList.add('is-hidden-events');

    window.removeEventListener('keydown', onKeydownClose);
    refs.eventsModal.removeEventListener('click', onOverlay);
  }

  function onKeydownClose(e) {
    if (e.code === 'Escape') onCloseModal();
  }

  function onOverlay(e) {
    if (e.target === refs.eventsModal) onCloseModal();
  }
})();

refs.buyTicketsBtn.addEventListener('click', onBuyTicketsBtn);

function onBuyTicketsBtn() {
  console.log('work');

  const whenValue = refs.dataModalWhere.textContent;

  refs.eventsList.insertAdjacentHTML('beforeend', eventsModalTpl());
}

// ?========= функціонал Андрія =============

// refs.openModalBtn.addEventListener('click', onOpenModalBtn);

// function onOpenModalBtn(e) {
//   const curentImg = e.target.src;
//   refs.mainModalFirstImg.src = curentImg;
//   refs.mainModalSecondImg.src = curentImg;
// }

// const searchServiceId = new SearchService();

// function onOpenModalBtn(e) {
//   const id = e.target.dataset.id;
//   console.log('id', id);

//   searchServiceId.fetchApiEvent().then(data =>
//     data.map(el => {
//       if (el.id === id) {
//         refs.mainModalFirstImg.src = el.images[5].url;
//         refs.mainModalSecondImg.src = el.images[8].url;
//       }
//     }),
//   );
// }
