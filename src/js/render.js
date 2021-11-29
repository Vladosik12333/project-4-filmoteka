import template from '../templates/card-gallery.hbs';
import MovieApiService from './api';
import { smallSpinnerOn, largeSpinnerOff } from './spinner';
import { showPaginationBtns } from './pagination';

const api = new MovieApiService();

export default async function renderGalleryFromApi(method, query, nextPage) {
  let movies;
  let totalPages = 1;

  if (method === 'fetchMoviesInTrending') {
    nextPage === null
      ? (movies = await api.fetchMoviesInTrending().then(response => response.results))
      : (movies = await api.fetchMoviesInTrending(nextPage).then(response => response.results));
  }

  if (method === 'fetchMovies') {
    let respData;
    nextPage === null
      ? (respData = await api.fetchMovies(query))
      : (respData = await api.fetchMovies(query, nextPage));
    totalPages = respData.total_pages;
    movies = respData.results;
  }

  const genres = await api.fetchGenre().then(response => response.genres);
  const dataToRender = uncodeGenresAndDate(movies, genres);
  largeSpinnerOff();
  appendGallery(dataToRender);
  smallSpinnerOn();
  showPaginationBtns();

  if (method === 'fetchMovies') return totalPages;
}

function uncodeGenresAndDate(moviesToUncode, encodedGenres) {
  moviesToUncode.forEach(movie => {
    let accGenresArray = [];
    movie.genre_ids.forEach(id => {
      encodedGenres.forEach(genre => {
        if (id === genre.id) {
          accGenresArray.push(genre.name);
        }
      });
    });
    movie.genre = accGenresArray.slice(0, 2).join(', ');
    if (movie.genre_ids.length > 2) {
      movie.genre = movie.genre + ', Other';
    }
    if (movie.first_air_date) {
      movie.release = parseInt(movie.first_air_date);
    } else if (movie.release_date) {
      movie.release = parseInt(movie.release_date);
    } else {
      movie.release = '-';
    }
  });

  return moviesToUncode;
}

function appendGallery(data) {
  document.querySelector('.gallery').innerHTML = template(data);
}
