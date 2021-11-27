import Pagination from 'tui-pagination';
import renderPage from './render';

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

export const pagination = new Pagination(container, options);

(function startPaginationMain() {
  pagination.on('beforeMove', async evt => {
    const { page: nextPage } = evt;

    renderPage('fetchMoviesInTrending', null, nextPage);
  });
})();

export function startPagination(query) {
  pagination.off();
  pagination.on('beforeMove', evt => {
    const { page: nextPage } = evt;

    renderPage('fetchMovies', query, nextPage);
  });
}
