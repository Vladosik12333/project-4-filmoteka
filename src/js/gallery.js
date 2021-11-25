import template from '../templates/card-gallery.hbs';
import NewsApiService from './api';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';

const container = document.getElementById('tui-pagination-container');
const windowInnerWidth = document.documentElement.clientWidth;
const pointBreak = 390;
let pageVisible = 7;

const newsApiService = new NewsApiService();
const refs = {
  cardContainer: document.querySelector('.gallery'),
};
// const Pagination = require('tui-pagination');

renderStartPage();

export default function renderStartPage() {
  newsApiService.fetchMoviesInTrending().then(data => {
    newsApiService
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

// виконується пагінація

if (windowInnerWidth < pointBreak) pageVisible = 3;
let pagination = new Pagination(container, {
  itemsPerPage: 20,
  visiblePages: pageVisible,
});
const mediaQuery = window.matchMedia('(min-width: ' + pointBreak + 'px)');
function handleTabletChange(e) {
  const pageCurrent = pagination.getCurrentPage();
  if (e.matches) {
    pagination.init(container, {
      totalItems: 1000,
      itemsPerPage: 20,
      visiblePages: 7,
      page: pageCurrent,
    });
  } else {
    pagination.init(container, {
      totalItems: 1000,
      itemsPerPage: 20,
      visiblePages: 3,
      page: pageCurrent,
    });
  }
}
mediaQuery.addEventListener(handleTabletChange);

const userpage = localStorage.getItem('page') ? localStorage.getItem('page') : 1;

loadPage(userpage);

function loadPage(currentPage) {
  fetchTrending(currentPage).then(r => {
    pagination.reset(r.total_pages);
    pagination.movePageTo(currentPage);
  });
  moveEvent();
}

// function moveEvent() {
//   pagination.on('afterMove', event => {
//     const currentPage = event.page;
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     localStorage.setItem('page', currentPage);
//     // renderStartPage.renderTrendingMovies(currentPage);
//   });
// }

// async function fetchTrending(currentPage) {
//   const response = await newsApiService.getTrending(currentPage);
//   return response;
// }
