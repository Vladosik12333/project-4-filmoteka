import LocalStorage from './locale-stor.js';
import observeRendGallery from './observer';
import { smallSpinnerOn } from './spinner';

const ls = new LocalStorage();

const refs = {
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
  const data = ls.get(value);
  observeRendGallery(data);
  smallSpinnerOn();
}

export default function renderLocalStorageExport(value) {
  refs.libraryQueueBtn.classList.remove('button--is-active');
  refs.libraryWatchedBtn.classList.add('button--is-active');
  renderLocalStorage(value);
}
