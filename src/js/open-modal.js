import { refs } from './refs';
import card from '../templates/eventCardsTpl.hbs';
import modalTpl from '../templates/modalTpl.hbs';
import SearchService from './api_service';
import eventsModalTpl from '../templates/events__modal.hbs';

export default (() => {
  refs.openModalBtn.addEventListener('click', onOpenModal);
  refs.closeModalBtn.addEventListener('click', onCloseModal);

  function onOpenModal(e) {
    if ((e.target.nodeName !== 'IMG') & 'P') {
      return;
    }
    console.log(e.target);
    document.body.classList.add('data-modal-open');

    refs.modal.classList.remove('is-hidden');
    window.addEventListener('keydown', onKeydownClose);
    refs.modal.addEventListener('click', onOverlay);

    const searchServiceId = new SearchService();

    const id = e.target.dataset.id;

    searchServiceId
      .fetchApiById(id)
      .then(el => eventsModalTpl(el))
      .then(el => (refs.mainModal.innerHTML = el));
  }

  function onCloseModal() {
    document.body.classList.remove('data-modal-open');
    refs.modal.classList.add('is-hidden');
    window.removeEventListener('keydown', onKeydownClose);
    refs.modal.removeEventListener('click', onOverlay);
  }

  function onKeydownClose(e) {
    if (e.code === 'Escape') onCloseModal();
  }

  function onOverlay(e) {
    if (e.target === refs.modal) onCloseModal();
  }
})();
