// import SearchService from './api_service';
// import eventsModalTpl from '../templates/events__modal.hbs';
import { refs } from './refs';
import { favEventsId } from './favEventsId';

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
      refs.noFavoriteEvents.classList.add('visually-hidden');
    }
  }

  function deleteEventFromFavorite(e) {
    if (e.target.classList.contains('btn-delete-event')) {
      const eventId = e.target.getAttribute('data-id');
      document.querySelector(`.events__list [data-id="${eventId}"]`).remove();
      favEventsId.splice(favEventsId.indexOf(eventId), 1);

      if (document.querySelectorAll('.events__list li').length == 0) {
        refs.noFavoriteEvents.classList.remove('visually-hidden');
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
})();
