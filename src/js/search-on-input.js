// TO BE REFACTORED
import debounce from 'lodash.debounce';
import NewsApiService from './api';
import template from '../templates/card-gallery.hbs';

const refs = {
  input: document.querySelector('#input'),
  cardContainer: document.querySelector('.gallery'),
};

const movieApiServise = new NewsApiService();

refs.input.addEventListener('input', debounce(renderMovieSearch, 500));

function renderMovieSearch(event) {
  const query = event.target.value;
  //...........start refactoring.............................................
  movieApiServise.fetchMovies(query).then(data => {
    movieApiServise
      .fetchGenre()
      .then(dt => {
        return dt.genres;
      })
      .then(genre => {
        data.results.forEach(el => {
          let genresArray = [];
          el.genre_ids.forEach(element => {
            genre.forEach(elem => {
              if (element === elem.id) {
                genresArray.push(elem.name);
              }
            });
          });
          el.genre = genresArray.slice(0, 2).join(', ');
          if (el.genre_ids.length > 2) {
            el.genre = el.genre + ', Other';
          }
          if (el.first_air_date) {
            el.release = parseInt(el.first_air_date);
          } else {
            el.release = parseInt(el.release_date);
          }
        });
        return data.results;
      })
      .then(final => {
        appendCardInfo(data.results);
      });
  });
}

function appendCardInfo(data) {
  refs.cardContainer.innerHTML = '';
  refs.cardContainer.insertAdjacentHTML('beforeend', template(data));
}

//..............end refactoring..........................................
