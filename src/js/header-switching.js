import renderLocalStorage from './library';
import renderStartPage from './render';

const refs = {
  header: document.querySelector('.header'),
  logo: document.querySelector('.logo'),
  homePageBtn: document.querySelector('#js-home'),
  libraryPageBtn: document.querySelector('#js-library'),
  inputContainer: document.querySelector('.input'),
  libraryContainer: document.querySelector('.library-nav'),
  input: document.querySelector('#input'),
  containerPagination: document.querySelector('#pagination'),
};

refs.libraryPageBtn.addEventListener('click', switchPageToLibrary);
refs.homePageBtn.addEventListener('click', switchPageToHome);
refs.logo.addEventListener('click', switchPageToHome);

function switchPageToLibrary() {
  refs.header.classList.remove('header--home');
  refs.inputContainer.classList.add('is-hidden');
  refs.homePageBtn.classList.remove('nav__link--current');

  refs.header.classList.add('header--library');
  refs.libraryContainer.classList.remove('is-hidden');
  refs.libraryPageBtn.classList.add('nav__link--current');
  refs.containerPagination.classList.add('is-hidden');

  renderLocalStorage('watched');
}

function switchPageToHome() {
  refs.input.value = null;

  refs.header.classList.remove('header--library');
  refs.libraryContainer.classList.add('is-hidden');
  refs.libraryPageBtn.classList.remove('nav__link--current');

  refs.header.classList.add('header--home');
  refs.inputContainer.classList.remove('is-hidden');
  refs.homePageBtn.classList.add('nav__link--current');
  refs.containerPagination.classList.remove('is-hidden');

  renderStartPage('fetchMoviesInTrending');
}
