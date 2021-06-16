
    const modalStudentsLink = document.querySelector('.footer-students');
    const closeModalStudents = document.querySelector('.modal-close-footer');
    const modalStudents = document.querySelector('.footer-modal');
    const backdropFooterModal = document.querySelector('.backdrop-footer');

  
    modalStudentsLink.addEventListener('click', toggleModal);
    closeModalStudents.addEventListener('click', toggleModal);
  
    function toggleModal(event) {
    event.preventDefault();
    modalStudents.classList.toggle('modal-open');
backdropFooterModal.classList.toggle('is-hidden-footer');
    }
