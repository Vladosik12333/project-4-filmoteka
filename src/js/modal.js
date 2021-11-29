import template from '../templates/card-modal.hbs';
import ApiService from './api';
import LocalStorage from './locale-stor';

const refs = {
  backdrop: document.querySelector('.js-backdrop-film'),
  modalFilmCont: document.querySelector('.js-modal-container'),
  modalFilmInfo: document.querySelector('.js-film-info'),
  closeModalButton: document.querySelector('.js-modal-button-close'),
  bodyEl: document.body,
  cardContainer: document.querySelector('.gallery'),
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


    changeClassButt (response,'watched',modalWatchedBtn );
    changeClassButt (response,'queue',modalQueueBtn );

    modalWatchedBtn.addEventListener('click', (evt) => {
      evt.target.blur()
    if(ls.auditId(response , 'watched')){
      addClass(evt.currentTarget, 'watched')
       ls.saveWatched(response);
    }else{ 
      deleteClass(evt.currentTarget, 'watched')
      ls.deleteWatch(response)
    }

    });
    modalQueueBtn.addEventListener('click', (evt) => {
      evt.target.blur()
      if (ls.auditId(response , 'queue')){
        addClass(modalQueueBtn, 'queue')
     ls.saveQueue(response);
    }else{ 
      ls.deleteQueue(response)
      deleteClass(modalQueueBtn, 'queue') 
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



function changeClassButt (res, key , butt){
  if (ls.auditId(res , key)) {
    deleteClass(butt, key);
  }else{
    addClass(butt, key);
  }
}


function addClass (but, name){
  but.textContent = `Delete ${name}`;
  but.classList.add('button--is-active');
}
function deleteClass(but , name){
  but.classList.remove('button--is-active');
  but.textContent = `Add to ${name}`;
}


