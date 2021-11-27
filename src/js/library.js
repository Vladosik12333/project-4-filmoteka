import LocalStorage from './locale-stor.js';
import template from '../templates/card-gallery.hbs';

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

export default function renderLocalStorage(value) {
  const data = ls.get(value);
  refs.resultTemplate.innerHTML = '';
  refs.resultTemplate.insertAdjacentHTML('beforeend', template(data));
}
