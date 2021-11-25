import template from '../templates/card-gallery.hbs';
import NewsApiService from './api';

const newsApiService = new NewsApiService();
const refs = {
    cardContainer: document.querySelector('.gallery'),
}

renderStartPage();

export default function renderStartPage() {

    
    newsApiService.fetchMoviesInTrending().then(data => {

    newsApiService.fetchGenre().then(dt => { return dt.genres }).then(genre => {
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
                el.genre = el.genre + ', Other'
            };
            if (el.first_air_date) {
                el.release = parseInt(el.first_air_date);
            } else {
                el.release = parseInt(el.release_date)
            }
        });
        return data.results
    }).then(final => {
        appendCardInfo(data.results);
    })
});

}

function appendCardInfo(data) {
    refs.cardContainer.innerHTML = '';
    refs.cardContainer.insertAdjacentHTML('beforeend', template(data))
}
