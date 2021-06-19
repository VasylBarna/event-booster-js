import SearchService from './api_service';
import { refs } from './refs';
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
    // console.log(e.target);
    document.body.classList.add('data-modal-open');
    refs.modal.classList.remove('is-hidden');
    window.addEventListener('keydown', onKeydownClose);
    refs.modal.addEventListener('click', onOverlay);

    const searchServiceId = new SearchService();

    const targetId = e.target.dataset.id;

    searchServiceId
      .fetchApiById(targetId)
      .then(el => modalTpl(el))
      .then(el => {
        refs.mainModal.innerHTML = el;

        const buyTicketsBtn = document.querySelector('.basket'); //! не добавляти в файл refs ні в якому разі
        buyTicketsBtn.addEventListener('click', onBuyTicketsBtn);
        console.log(buyTicketsBtn);

        function onBuyTicketsBtn() {
          console.log('work');

          searchServiceId
            .fetchApiById(targetId)
            .then(el => eventsModalTpl(el))
            .then(el => refs.eventsList.insertAdjacentHTML('beforeend', el));
        }

        // ? провірка на те чи є такий елент вже
        // тре провіряти масив елементів (їх ід)який вже в корзині
        // function onBuyTicketsBtn() {
        //   searchServiceId
        //     .fetchApiById(targetId)
        //     .then(el => {
        //       console.log('target', targetId);
        //       console.log('el', el);
        //       console.log('id', el.id);
        //       const obj = {
        //         arrCardId: [],
        //         el: el,
        //       };

        //       obj.arrCardId.push(el.id);

        //       return obj;
        //     })
        //     .then(item => {
        //       console.log('item', item);

        //       if (item.arrCardId.includes(targetId)) {
        //         return console.log('take ee'); //TODO тут потрібен ponifay
        //       }

        //       eventsModalTpl(item);
        //       refs.eventsList.insertAdjacentHTML('beforeend', el);
        //     });
        // }
      });
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

const searchServiceId = new SearchService();

// const value = searchServiceId.fetchApiById();
// console.log(value);

refs.openModalBtn.addEventListener('click', onOpenModal);

function onOpenModal(e) {
  if ((e.target.nodeName !== 'IMG') & 'P') {
    return;
  }

  const id = e.target.dataset.id;
  console.log('id', id);

  searchServiceId
    .fetchApiById(id)
    // .then(id => console.log(id))
    .then(el => modalTpl(el))
    .then(el => (refs.mainModal.innerHTML = el));

  // console.log(refs.mainModal);

  // refs.mainModal.innerHTML = eventsModalTpl(value);

  document.body.classList.add('data-modal-open');
  refs.modal.classList.remove('is-hidden');
}
