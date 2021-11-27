import { showErrorMessege } from './on-error';

const API_KEY = 'e8ad9fce8be376ae39b35f64abca58d4';
const BASE_URL = 'https://api.themoviedb.org';

export default class ApiService {
  page = 1;

  fetchMovies = async (query, currentPage) => {
    try {
      if (currentPage === undefined) {
        currentPage = this.page;
      } else {
        this.page = currentPage;
      }

      const url = encodeURI(
        `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&query=${query}&page=${currentPage}`,
      );

      const response = await fetch(url);
      const movies = await response.json();

      const respStatus = movies.total_pages === 0 ? true : false;

      if (respStatus) {
        this.resetPage();
        throw ReferenceError();
      }

      return movies;
    } catch (error) {
      showErrorMessege();
    }
  };

  fetchMoviesById = async movieId => {
    try {
      const url = `${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

      const response = await fetch(url);
      const movie = await response.json();

      const respStatus = movie.success === false ? true : false;

      if (respStatus) {
        throw ReferenceError(movie.status_message);
      }

      return movie;
    } catch (error) {
      console.log(error.message);
    }
  };

  fetchMoviesInTrending = async (currentPage, type, time) => {
    try {
      if (type === undefined) {
        type = 'movie';
      }
      if (time === undefined) {
        time = 'day';
      }
      if (currentPage === undefined) {
        currentPage = this.page;
      } else {
        this.page = currentPage;
      }

      const url = `${BASE_URL}/3/trending/${type}/${time}?api_key=${API_KEY}&page=${currentPage}`;

      const response = await fetch(url);
      const moviesInTrend = await response.json();

      const respStatus = moviesInTrend.total_pages === 0 ? true : false;

      if (respStatus) {
        this.resetPage();
        throw ReferenceError('0 movie');
      }

      return moviesInTrend;
    } catch (error) {
      console.log(error.message);
    }
  };

  fetchGenre = async () => {
    try {
      const url = `${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

      const response = await fetch(url);
      const genre = await response.json();

      const respStatus = genre.genres.length === 0 ? true : false;

      if (respStatus) {
        throw ReferenceError('0 genres');
      }

      return genre;
    } catch (error) {
      console.log(error.message);
    }
  };

  resetPage() {
    this.page = 1;
  }
}
