import { renderWidthLocalStorege } from './record-loc-stor';
import renderSrartPage from './gallery';

const refs = {
  header: document.querySelector('.header'),
  logo: document.querySelector('.logo'),
  homePageBtn: document.querySelector('#home-js'),
  libraryPageBtn: document.querySelector('#library-js'),
  inputContainer: document.querySelector('.input'),
  libraryContainer: document.querySelector('.library-nav'),
  input: document.querySelector('#input'),
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

  renderWidthLocalStorege('watched');
}

function switchPageToHome() {
  refs.input.value = '';

  refs.header.classList.remove('header--library');
  refs.libraryContainer.classList.add('is-hidden');
  refs.libraryPageBtn.classList.remove('nav__link--current');

  refs.header.classList.add('header--home');
  refs.inputContainer.classList.remove('is-hidden');
  refs.homePageBtn.classList.add('nav__link--current');

  renderSrartPage();
}
