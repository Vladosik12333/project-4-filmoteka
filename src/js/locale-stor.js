import { showErrorMessege, stopErrorMessage } from './on-error';

export default class LocalStorage {
  _deleted(key, obj) {
    const listParse = JSON.parse(localStorage.getItem(key));
    if (listParse) {
      const uniqueId = listParse.find(film => film.id === obj.id);
      if (!uniqueId) {
        return alert(`The "${obj.original_title}" movie is not in your library.`);
      } else {
        const newList = listParse.filter(film => film.id !== obj.id);
        this._save(key, newList);
      }
    } else {
      return alert(`There are no movies in your "${key}" library.`);
    }
  }

  _load(key) {
    stopErrorMessage();
    try {
      const getValue = localStorage.getItem(key);
      if (getValue === null) {
        throw ReferenceError();
      }
      return JSON.parse(getValue);
    } catch (err) {
      showErrorMessege(`Your "${key}" library is empty. Add a movie, please.`);
    }
  }

  _save(key, value) {
    try {
      const getString = JSON.stringify(value);
      localStorage.setItem(key, getString);
    } catch (err) {
      showErrorMessege('Select a movie.');
    }
  }

  _newObjForLS(obj) {
    const acc = [];
    obj['genres'].forEach(genre => {
      acc.push(genre.name);
    });

    return {
      id: obj['id'],
      poster_path: obj['poster_path'],
      title: obj['title'],
      vote_average: obj['vote_average'],
      genre: acc.length > 2 ? acc.slice(0, 2).join(', ') + ', Other' : acc.slice(0, 2).join(', '),
      release: parseInt(obj['release_date']),
    };
  }

  saveQueue(obj) {
    const newObj = this._newObjForLS(obj);
    const queueParse = JSON.parse(localStorage.getItem('queue'));
    const arrayToLS = [];
    if (queueParse) {
      if (queueParse.find(num => num.id === newObj.id)) return alert('The movie is already there.');
      arrayToLS.push(...queueParse, newObj);
      this._save('queue', arrayToLS);
    } else {
      arrayToLS.push(newObj);
      this._save('queue', arrayToLS);
    }
  }

  saveWatched(obj) {
    const newObj = this._newObjForLS(obj);
    const watchParse = JSON.parse(localStorage.getItem('watched'));
    const arrayToLS = [];
    if (watchParse) {
      if (watchParse.find(num => num.id === newObj.id)) return alert('The movie is already there.');
      arrayToLS.push(...watchParse, newObj);
      this._save('watched', arrayToLS);
    } else {
      arrayToLS.push(newObj);
      this._save('watched', arrayToLS);
    }
  }

  get(key) {
    return this._load(key);
  }

  deleteWatch(obj) {
    this._deleted('watched', obj);
  }

  deleteQueue(obj) {
    this._deleted('queue', obj);
  }
}
