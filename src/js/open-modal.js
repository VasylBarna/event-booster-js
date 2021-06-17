(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', onOpenModal);
  refs.closeModalBtn.addEventListener('click', onCloseModal);

  function onOpenModal() {
    document.body.classList.add('modal-open');
    refs.modal.classList.remove('is-hidden');
    window.addEventListener('keydown', onKeydownClose);
    refs.modal.addEventListener('click', onOverlay);
  }
  function onCloseModal() {
    document.body.classList.remove('modal-open');
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
