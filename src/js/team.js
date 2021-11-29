refs = {
  bodyEl: document.body,
  backdrop: document.querySelector('.js-backdrop-team'),
  buttonFooter: document.querySelector('.footer-info__button'),
  closeModalButton: document.querySelector('.button-close-team-modal'),
};

console.log(refs.buttonFooter);
refs.buttonFooter.addEventListener('click', openModal);

function openModal(event) {
  event.preventDefault();

  refs.bodyEl.classList.add('scroll-hidden');
  refs.backdrop.classList.remove('backdrop--hidden');

  refs.closeModalButton.addEventListener('click', closeModal);
  refs.backdrop.addEventListener('click', backdropClick);
  window.addEventListener('keydown', onPressEsc);
}

function onPressEsc(evt) {
  if (evt.code === 'Escape') {
    closeModal();
  }
}

function backdropClick(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal();
  }
}

function closeModal() {
  refs.bodyEl.classList.remove('scroll-hidden');
  refs.backdrop.classList.add('backdrop--hidden');
  refs.backdrop.removeEventListener('click', backdropClick);
  window.removeEventListener('keydown', onPressEsc);
}
