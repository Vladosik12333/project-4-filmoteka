
import template from '../templates/card-modal.hbs';
import ApiService from './api';
import LocalStorage from './locale-stor';
import renderLocalStorageExport from './library'

const refs = {
  backdrop: document.querySelector('.js-backdrop-film'),
  modalFilmCont: document.querySelector('.js-modal-container'),
  modalFilmInfo: document.querySelector('.js-film-info'),
  closeModalButton: document.querySelector('.js-modal-button-close'),
  bodyEl: document.body,
  cardContainer: document.querySelector('.gallery'),
  headers: document.querySelector('.header')
};

const api = new ApiService();
const ls = new LocalStorage();

refs.cardContainer.addEventListener('click', openModalFilm);

function openModalFilm(evt) {
  evt.preventDefault();
  refs.modalFilmCont.classList.add('backdrop--animation');
  const isFilmCardId = evt.path[2].dataset.id;

  if (!isFilmCardId) {
    return;
  }

  api.fetchMoviesById(isFilmCardId).then(response => {
    refs.modalFilmInfo.innerHTML = template(response);

    const modalWatchedBtn = document.querySelector('#modal-watched');
    const modalQueueBtn = document.querySelector('#modal-queue');
    const libraryBtnWatched = document.querySelector('#library-watched');
    const libraryBtnQueue = document.querySelector('#library-queue');

    ls.changeClassButt(response, 'watched', modalWatchedBtn);
    ls.changeClassButt(response, 'queue', modalQueueBtn);

    modalWatchedBtn.addEventListener('click', (evt) => {
      evt.target.blur()
      if (ls.searchDoubledId(response , 'watched')){
        ls.saveWatched(response, modalWatchedBtn)
      }else{
        ls.deleteWatch(response, modalWatchedBtn);
      }
      if (!refs.headers.classList.contains('header--home')){
        if(libraryBtnWatched.classList.contains('button--is-active')){ 
          renderLocalStorageExport('watched');
        }
      }
    });
    modalQueueBtn.addEventListener('click', (evt) => {
      evt.target.blur()
      if (ls.searchDoubledId(response , 'queue')){
        ls.saveQueue(response, modalQueueBtn)
      }else{
        ls.deleteQueue(response, modalQueueBtn);
      }
      if (!refs.headers.classList.contains('header--home')){
        if(libraryBtnQueue.classList.contains('button--is-active')){ 
          renderLocalStorageExport('queue');
        }        
      }
    });
  });

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
  refs.modalFilmCont.classList.remove('backdrop--animation');
  refs.modalFilmInfo.innerHTML = '';
  refs.bodyEl.classList.remove('scroll-hidden');
  refs.backdrop.classList.add('backdrop--hidden');
  refs.backdrop.removeEventListener('click', backdropClick);
  window.removeEventListener('keydown', onPressEsc);
}