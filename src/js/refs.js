const refs = {
  cardsList: document.querySelector('.cards-list'),
  main: document.querySelector('.main'),
  loader: document.querySelector('[data-loader]'),
  eventsOpenModalBtn: document.querySelector('[data-events-modal-open]'),
  eventCloseModalBtn: document.querySelector('[data-events-modal-close]'),
  eventsModal: document.querySelector('[data-events-modal]'),
  buyTicketsBtn: document.querySelector('.modal-btn'), //Юра кнопка по який дод квитки в корзину
  eventsList: document.querySelector('.events__list'), //Юра список в який дод квитки
  inputRef: document.querySelector('.input'),
  optionRef: document.querySelector('.country-option'),
  selectRef: document.querySelector('.select-country'),


};

export { refs };
