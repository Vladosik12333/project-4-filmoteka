import { showErrorMessege } from './on-error'; 

export default class LocalStor {
    constructor() {

    }
    _deleted(obj ,key) {
                const watchParse = JSON.parse(localStorage.getItem(key));
        if (watchParse) {
            const uniqueId = watchParse.find(num => num.id === obj.id)
            console.log(uniqueId)
           console.log(!uniqueId)
        if (!uniqueId) {
               return alert(` Фильм ${obj.original_title} отсуствует в вашей библиотеке`)
            } else {
                const filterDel = watchParse.filter(el => el.id !== obj.id)
                this._save(key, filterDel)
            }
        } else {
            return alert(`В вашей библиотеке watched нету фильмов `)
        }
    
}

    _load(key) {
        try {
            const getValue = localStorage.getItem(key);
            return getValue === null ? undefined : JSON.parse(getValue);
        } catch (err) {
            console.log(123);
            showErrorMessege('The list is empty. Add to movie');
        }
    };
    _save(key, value) {
        try {
            const getString = JSON.stringify(value);
            localStorage.setItem(key, getString);
        } catch (err) {
            showErrorMessege('Select a movie');
        }
    };
    saveQueue(obj) {
        const queueParse = JSON.parse(localStorage.getItem('queue'));
        const array = []
        if (queueParse) {
            const uniqueId = queueParse.find(num => num.id === obj.id)
            if (uniqueId) {
                return alert('такой фильм уже есть')
            }
            array.push(...queueParse, obj)
            this._save('queue', array)
        } else {
            array.push(obj)
            this._save('queue', array)
        }
    }
    saveWatched(obj) {
        const watchParse = JSON.parse(localStorage.getItem('watched'));
        const array = []
        if (watchParse) {
            const uniqueId = watchParse.find(num => num.id === obj.id)
            if (uniqueId) {
                return alert('такой фильм уже есть')
            }
            array.push(...watchParse, obj)
            this._save('watched', array)
        } else {
            array.push(obj)
            this._save('watched', array)
        }
    }
    get(value) {
        return console.log(this._load(value))
    }
    deleteWatch(obj) {
        this._deleted(obj ,'watched')
    }
     
    deleteQueue(obj) {
        this._deleted(obj ,'queue')
    }
}


