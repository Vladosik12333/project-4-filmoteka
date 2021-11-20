const API_KEY = 'e8ad9fce8be376ae39b35f64abca58d4';
const BASE_URL = 'https://api.themoviedb.org';



export default class NewsApiService {
  constructor() {
    // this.page = 1;
    // this.searchQuery;
    
  }

//   fetchMovies() {
//     const url = `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;

//     return fetch(url).then(response => {
//       if (response.ok) return response.json();
//     });
// }


    searchMovies = async (query) => {
        const url = `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;

        const response = await fetch(url);
        const json = await response.json();
        return json;
    }
}

const newsApiService = new NewsApiService();
newsApiService.searchMovies("Matrix");

// fetchMoviesTrending() {
//     const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;

//     return fetch(url).then(response => {
//       if (response.ok) return response.json();
//     });


// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false


// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US