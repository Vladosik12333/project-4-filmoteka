import debounce from 'lodash.debounce';
import { pagination, startPagination } from './pagination';
import renderPage from './render';

const refs = {
  input: document.querySelector('#input'),
  spinner: document.querySelector('.spinner'),
};

refs.input.addEventListener('input', debounce(renderMovieSearch, 500));
refs.input.addEventListener('keypress', enterDisable);

async function renderMovieSearch(event) {
  const query = event.target.value;

  try {
    if (query.trim() === '') return;
    refs.spinner.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';

    await renderPage('fetchMovies', query).then(pages => pagination.reset(pages));

    refs.spinner.classList.add('is-hidden');
    document.body.style.overflow = 'scroll';
    startPagination(query);
  } catch (error) {
    refs.spinner.classList.add('is-hidden');
  }
}

function enterDisable(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
  }
}
