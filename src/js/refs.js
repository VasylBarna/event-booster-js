const refs = {
  cardsList: document.querySelector('.cards-list'),
  main: document.querySelector('.main'),
  loader: document.querySelector('[data-loader]'),
  eventsOpenModalBtn: document.querySelector('[data-events-modal-open]'),
  eventCloseModalBtn: document.querySelector('[data-events-modal-close]'),
  eventsModal: document.querySelector('[data-events-modal]'),
  buyTicketsBtn: document.querySelector('.modal-btn'), //Юра кнопка по який дод квитки в корзину
  eventsList: document.querySelector('.events__list'), //Юра список в який дод квитки
};

export { refs };
