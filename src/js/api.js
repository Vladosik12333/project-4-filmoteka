const API_KEY = 'e8ad9fce8be376ae39b35f64abca58d4';
const BASE_URL = 'https://api.themoviedb.org';

export default class NewsApiService {
  constructor() {
    this.page = 1;
  }

  // *** for search movie *** //
  fetchMovies = async (query, currentPage) => {
    if (currentPage === undefined) {
      currentPage = this.page;
    }

    const url = `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&page=${this.page}&include_adult=false&query=${query}&page=${currentPage}`;

    const response = await fetch(url);
    const movies = await response.json();
    if (response.ok) this.incrementPage();
    return movies;
  };

  // *** for discription movie *** //
  fetchMoviesById = async (movieId) => {
    const url = `${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

    const response = await fetch(url);
    const movie = await response.json();
    if (response.ok) this.incrementPage();
    return movie;
  };


  // *** for get movie in trending *** //
  fetchMoviesInTrending = async (type, time, currentPage) => {
    if (type === undefined) {
      type = 'all';
    }
    if (time === undefined) {
      time = 'day';
    }
    if (currentPage === undefined) {
      currentPage = this.page;
    }

    const url = `${BASE_URL}/3/trending/${type}/${time}?api_key=${API_KEY}&page=${currentPage}`;

    const response = await fetch(url);
    const moviesInTrend = await response.json();
    if (response.ok) this.incrementPage();
    return moviesInTrend;
  };

    // *** for get movie's genres *** //
  fetchMoviesByGenre = async () => {
    const url = `${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
  
    const response = await fetch(url);
    const movie = await response.json();
    if (response.ok) this.incrementPage();
    return movie;
  };

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

