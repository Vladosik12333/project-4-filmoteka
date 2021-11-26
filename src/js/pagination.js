import Pagination from 'tui-pagination';
import NewsApiService from './api';
import template from '../templates/card-gallery.hbs';

const container = document.getElementById('pagination');

const options = {
  totalItems: 1000,
  itemsPerPage: 1,
  visiblePages: 5,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const refs = {
  input: document.querySelector('#input'),
  cardContainer: document.querySelector('.gallery'),
  cardContainer: document.querySelector('.gallery'),
};

const movieApiServise = new NewsApiService();

export const pagination = new Pagination(container, options);

(function onButtonMain() {
  pagination.on('beforeMove', async evt => {
    const { page: nextPage } = evt;

    movieApiServise.fetchMoviesInTrending(nextPage).then(data => {
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
        .then(result => {
          refs.cardContainer.innerHTML = '';
          refs.cardContainer.insertAdjacentHTML('beforeend', template(result));
        });
    });
  });
})();

export function onButton(query) {
  pagination.off();
  pagination.on('beforeMove', evt => {
    const { page: nextPage } = evt;
    const search = query;
    console.log('pagination');

    movieApiServise.fetchMovies(search, nextPage).then(data => {
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
        .then(result => {
          refs.cardContainer.innerHTML = '';
          refs.cardContainer.insertAdjacentHTML('beforeend', template(result));
        });
    });
  });
}
