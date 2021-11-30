import LocalStorage from './locale-stor.js';
import observeRendGallery from './observer-library'


const ls = new LocalStorage();

const refs = {
  resultTemplate: document.querySelector('.gallery'),
  libraryWatchedBtn: document.querySelector('#library-watched'),
  libraryQueueBtn: document.querySelector('#library-queue'),
};

refs.libraryWatchedBtn.addEventListener('click', () => {
  refs.libraryQueueBtn.classList.remove('button--is-active');
  refs.libraryWatchedBtn.classList.add('button--is-active');
  renderLocalStorage('watched');
});

refs.libraryQueueBtn.addEventListener('click', () => {
  refs.libraryWatchedBtn.classList.remove('button--is-active');
  refs.libraryQueueBtn.classList.add('button--is-active');
  renderLocalStorage('queue');
});

function renderLocalStorage(value) {
  refs.resultTemplate.classList.add('main-section--animation');
  const data = ls.get(value);
  observeRendGallery(data);  
}

export default function renderLocalStorageExport(value) {
  refs.libraryQueueBtn.classList.remove('button--is-active');
  refs.libraryWatchedBtn.classList.add('button--is-active');
  renderLocalStorage(value);
}
