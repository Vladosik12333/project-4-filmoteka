import template from '../templates/card-modal.hbs';
import ApiService from './api';
import LocalStorage from './locale-stor';
import renderLocalStorageExport from './library'
import functionRenderFilms from './render';




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
  const isFilmCardId = evt.path[2].dataset.id;

  if (!isFilmCardId) {
    return;
  }


  api.fetchMoviesById(isFilmCardId).then(response => {
    refs.modalFilmInfo.innerHTML = template(response);

    const modalWatchedBtn = document.querySelector('#modal-watched');
    const modalQueueBtn = document.querySelector('#modal-queue');
    const libraryWatchedBtn = document.querySelector('#library-watched');
   const libraryQueueBtn = document.querySelector('#library-queue');


    changeClassButt (response,'watched',modalWatchedBtn );
    changeClassButt (response,'queue',modalQueueBtn );

    modalWatchedBtn.addEventListener('click', (evt) => {
      evt.target.blur()
    if(ls.searchDoubledId(response , 'watched')){
      addClass(evt.currentTarget, 'watched')
       ls.saveWatched(response);
    }else{ 
      deleteClass(evt.currentTarget, 'watched')
      ls.deleteWatch(response)
    }
    if (!refs.headers.classList.contains('header--home')){
      renderLocalStorageExport('watched');
      libraryWatchedBtn.classList.add('button--is-active');
      libraryQueueBtn.classList.remove('button--is-active');
    }

  //  evt.preventDefault()

    });
    modalQueueBtn.addEventListener('click', (evt) => {
      evt.target.blur()
      if (ls.searchDoubledId(response , 'queue')){
        addClass(modalQueueBtn, 'queue')
     ls.saveQueue(response);
    }else{ 
      deleteClass(modalQueueBtn, 'queue') 
      ls.deleteQueue(response)

    }
    if (!refs.headers.classList.contains('header--home')){
      renderLocalStorageExport('queue');
      libraryQueueBtn.classList.add('button--is-active');
      libraryWatchedBtn.classList.remove('button--is-active');
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
  refs.modalFilmInfo.innerHTML = '';
  refs.bodyEl.classList.remove('scroll-hidden');
  refs.backdrop.classList.add('backdrop--hidden');
  refs.backdrop.removeEventListener('click', backdropClick);
  window.removeEventListener('keydown', onPressEsc);
}



function changeClassButt (obj, key , butt){
  if (ls.searchDoubledId(obj , key)) {
    deleteClass(butt, key);
  }else{
    addClass(butt, key);
  }
}


function addClass (butt, name){
  butt.textContent = `Delete ${name}`;
  butt.classList.add('button--is-active');
}
function deleteClass(butt , name){
  butt.classList.remove('button--is-active');
  butt.textContent = `Add to ${name}`;
}


