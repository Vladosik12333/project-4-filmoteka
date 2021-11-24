
export default class LocalStor {
    constructor() {

    }  
    _load(key)  {
        try {
            const getValue = localStorage.getItem(key);  
            return getValue === null ? undefined : JSON.parse(getValue);
        } catch (err) {
            console.error('Get state error: ', err);
        }
    };  
    _save(key, value) {
        try {
            const getString = JSON.stringify(value);
            localStorage.setItem(key, getString);
        } catch (err) {
            console.error('Set state error: ', err);
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
            const uniqueId =  watchParse.find(num => num.id === obj.id)
            if (uniqueId)   {
                return alert('такой фильм уже есть')
            }
            array.push(...watchParse , obj)
            this._save('watched',array)
        } else{
        array.push(obj)
        this._save('watched',array)  
        }
    }
    getWatched() {
        this._load('watched')
    }
    getQueue() {
        this._load('queue')
    }
}



















