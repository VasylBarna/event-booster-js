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
  const whenValue = refs.dataModalWhere.textContent;

  refs.eventsList.insertAdjacentHTML('beforeend', eventsModalTpl(whenValue));
}
