
    const modalStudentsLink = document.querySelector('.footer-students');
    const closeModalStudents = document.querySelector('.modal-close-footer');
    const modalStudents = document.querySelector('.footer-modal');
    const backdropFooterModal = document.querySelector('.backdrop-footer');
    const body = document.body;
  
    modalStudentsLink.addEventListener('click', toggleModal);
    closeModalStudents.addEventListener('click', toggleModal);
  
    function toggleModal(event) {
    event.preventDefault();
    modalStudents.classList.toggle('modal-open');
    backdropFooterModal.classList.toggle('is-hidden-footer');
    body.classList.toggle('modal-open');
    }


// закрытие модалки по клику за ее пределами

// 1 вариант

// body.addEventListener('click', evt => {
//     if(evt.target.className === 'footer-modal') {
//     return};
//     modalStudents.classList.remove('.modal-open');
//     });

// 2 вариант

//     modalStudents.addEventListener('click', onBackdropFooter);

//     function onBackdropFooter(e) {
//     if (e.target !== modalStudents) {
//         onCloseModal();
//     }
// }

// function onCloseModal() {
//         document.body.classList.remove('modal-open');
//         modalStudents.classList.add('is-hidden-footer');
//         modalStudents.removeEventListener('click', onBackdropFooter);
//       }
      