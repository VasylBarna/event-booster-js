// import SearchService from './api_service';
// import eventsModalTpl from '../templates/events__modal.hbs';
import { refs } from './refs';

export default (() => {
  refs.eventsOpenModalBtn.addEventListener('click', onOpenModal);
  refs.eventCloseModalBtn.addEventListener('click', onCloseModal);

  function onOpenModal() {
    document.body.classList.add('events-modal-open');
    refs.eventsModal.classList.remove('is-hidden-events');
    refs.eventsList.addEventListener('click', deleteEventFromFavorite);

    window.addEventListener('keydown', onKeydownClose);
    refs.eventsModal.addEventListener('click', onOverlay);

    if (document.querySelectorAll('.events__list li').length > 0) {
      toggleVisuallyHidden();
    }
  }

  function deleteEventFromFavorite(e) {
    if (e.target.classList.contains('btn-delete-event')) {
      const eventId = e.target.getAttribute('data-id');
      document.querySelector(`.events__list [data-id="${eventId}"]`).remove();

      if (document.querySelectorAll('.events__list li').length == 0) {
        toggleVisuallyHidden();
      }
    }
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

  function toggleVisuallyHidden() {
    refs.noFavoriteEvents.classList.toggle('visually-hidden');
  }
})();
