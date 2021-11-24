import cardModalTpl from '../templates/card-modal.hbs';
// import NewsApiService from './api';

// const refs = {
//     backdrop: document.querySelector('js-backdrop'),
//     modalFilmCont: document.querySelector('js-modal-container'),
//     modalFilmInfo: document.querySelector('js-film-info'),
//     closeFilmModal: document.querySelector('js-film-modal-close'),
//     bodyEl: document.querySelector('body'),
//     cardContainer: document.querySelector('gallery'),
// }

// const newsApiService = new NewsApiService();

// refs.cardContainer.addEventListener('click', openModalFilm);

// // відкриваєм модалку
// function openModalFilm(evt) {
//   evt.preventDefault();

//   //визначаєм на що клікнули
//   const isFilmCardElem = evt.target.classList.contains('gallery');

//   if (!isFilmCardElem) {
//     return;
//   }

//   const movieId = evt.target.parentNode.dataset.action;

//  newsApiService.fetchMoviesById(movieId).then(response => {
//     refs.modalFilmInfo.innerHTML = cardModalTpl(response);
    
//   });

//   refs.bodyEl.classList.add('scroll-hidden');
//   refs.backdrop.classList.remove('backdrop--hidden');

//   refs.backdrop.addEventListener('click', backdropClick);
//   refs.closeFilmModal.addEventListener('click', closeModal);

//   window.addEventListener('keydown', onPressEsc);
  
  
// }

// // close modal
// export function closeModal(evt) {
//     refs.cardModalTpl.innerHTML = '';

//   refs.bodyEl.classList.remove('scroll-hidden');
//   refs.backdrop.classList.add('backdrop--hidden');
//   refs.backdrop.removeEventListener('click', backdropClick);
//   window.removeEventListener('keydown', onPressEsc);
//   refs.modalFilmCont.removeEventListener('click', onClikBtnFilmModal);   

// }

// // close escape
// function onPressEsc(evt) {
//   if (evt.code === 'Escape') {
//     closeModal();
//   }
// }

// function backdropClick(evt) {
//    if (evt.target === evt.currentTarget) {
//     closeModal();
//   }
// }