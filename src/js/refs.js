const refs = {
  cardsList: document.querySelector('.cards-list'),
  main: document.querySelector('.main'),
  loader: document.querySelector('[data-loader]'),
  eventsOpenModalBtn: document.querySelector('[data-events-modal-open]'),
  eventCloseModalBtn: document.querySelector('[data-events-modal-close]'),
  eventsModal: document.querySelector('[data-events-modal]'),
  buyTicketsBtn: document.querySelector('.modal-btn'), //Юра кнопка по який дод квитки в корзину
  eventsList: document.querySelector('.events__list'), //Юра список в який дод квитки
  mainModalFirstImg: document.querySelector('.modal-img-first'), // Юра велика img в який передаєм забраження при відкриті головної модалки
  mainModalSecondImg: document.querySelector('.modal-img-second'), //Юра менша img в який передаєм забраження при відкриті головної модалки
  mainModal: document.querySelector('[data-insert]'), // !Юра куда пендерем модалку!
  inputRef: document.querySelector('.input'),
  optionRef: document.querySelector('.country-option'),
  selectRef: document.querySelector('.select-country'),
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  backdrop: document.querySelector('.backdrop'),
};

export { refs };
