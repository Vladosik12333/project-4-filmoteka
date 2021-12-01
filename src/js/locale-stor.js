import { showErrorMessege, stopErrorMessage } from './on-error';

export default class LocalStorage {
  _deleted(key, obj) {
    const listParse = JSON.parse(localStorage.getItem(key));
    const newList = listParse.filter(film => film.id !== obj.id);
    this._save(key, newList);
  }

  _addClass(btn, name) {
    btn.textContent = `Delete ${name}`;
    btn.classList.add('button--is-active');
  }

  _deleteClass(btn, name) {
    btn.classList.remove('button--is-active');
    btn.textContent = `Add to ${name}`;
  }

  _load(key) {
    stopErrorMessage();
    try {
      const getValue = JSON.parse(localStorage.getItem(key));
      if (getValue.length === 0) {
        throw ReferenceError();
      }
      return getValue;
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

  saveQueue(obj, btn) {
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
    this._addClass(btn, 'queue');
  }

  saveWatched(obj, btn) {
    const newObj = this._newObjForLS(obj);
    const watchParse = JSON.parse(localStorage.getItem('watched'));
    const arrayToLS = [];
    if (watchParse) {
      if (watchParse.find(num => num.id === newObj.id)) return alert('The movie is already there.');
      arrayToLS.push(...watchParse, newObj);
      this._save('watched', arrayToLS, btn);
    } else {
      arrayToLS.push(newObj);
      this._save('watched', arrayToLS, btn);
    }
    this._addClass(btn, 'watched');
  }

  get(key) {
    return this._load(key);
  }

  deleteWatch(obj, btn) {
    this._deleted('watched', obj);
    this._deleteClass(btn, 'watched');
  }

  deleteQueue(obj, btn) {
    this._deleted('queue', obj);
    this._deleteClass(btn, 'queue');
  }

  changeClassButt(obj, key, btn) {
    if (this.searchDoubledId(obj, key)) {
      this._deleteClass(btn, key);
      return;
    } else {
      this._addClass(btn, key);
    }
  }

  searchDoubledId(obj, key) {
    const listParse = JSON.parse(localStorage.getItem(key));
    if (listParse) {
      const uniqueId = listParse.find(film => film.id === obj.id);
      return !uniqueId;
    }
    return true;
  }
}
