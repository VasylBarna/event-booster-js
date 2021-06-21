import SearchService from './api_service';
import { refs } from './refs';
import modalTpl from '../templates/modalTpl.hbs';
import eventsModalTpl from '../templates/events__modal.hbs';
export default (() => {
  refs.openModalBtn.addEventListener('click', onOpenModal);
  refs.closeModalBtn.addEventListener('click', onCloseModal);

  function onOpenModal(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') return;
    document.body.classList.add('data-modal-open');
    refs.modal.classList.remove('is-hidden');
    window.addEventListener('keydown', onKeydownClose);
    refs.modal.addEventListener('click', onOverlay);
  }
  function onCloseModal() {
    document.body.classList.remove('data-modal-open');
    refs.modal.classList.add('is-hidden');
    window.removeEventListener('keydown', onKeydownClose);
    refs.modal.removeEventListener('click', onOverlay);
    //   setTimeout(() => {
    //   refs.modal.innerHTML = '';
    // }, 300);
  }
  function onKeydownClose(e) {
    if (e.code === 'Escape') {
      onCloseModal();
    }
  }
  function onOverlay(e) {
    if (e.target === refs.modal) {
      onCloseModal();
    }
  }
})();
const searchServiceId = new SearchService();

const value = searchServiceId.fetchApiById();
console.log(value);

refs.openModalBtn.addEventListener('click', onOpenModal);

function onOpenModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') return;

  // if (!e.target.classList.contains('event-card')) {
  //   return;
  // }
  console.log(e.target);
  const id = e.target.dataset.id;
  console.log('id', id);

  searchServiceId
    .fetchApiById(id)
    // .then(id => console.log(id))
    .then(el => eventsModalTpl(el))
    .then(el => (refs.mainModal.innerHTML = el));

  console.log(refs.mainModal);

  //  refs.mainModal.innerHTML = eventsModalTpl(value);

  document.body.classList.add('data-modal-open');
  refs.modal.classList.remove('is-hidden');
}
