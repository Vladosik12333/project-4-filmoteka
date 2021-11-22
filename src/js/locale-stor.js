// const obj = {
//     name: "vaasya",
//     vote: "8.3",
//     votes: "12000000",
//     popularity: "100,2",
//     genre: "Western",
//     about: "Four of the West’s most infamous outlaws assemble to steal a huge stash of gold from the most corrupt settlement of the gold rush towns. But not all goes to plan one is killed and the other three escapes with bags of gold hide out in the abandoned gold mine where they happen across another gang of three – who themselves were planning to hit the very same bank! As tensions rise, things go from bad to worse as they realise the bags of gold are filled with lead... they’ve been double crossed – but by who and how?", img: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ci5A9TPmNajMxt1L8p4KlZ76sc9.jpg"
// }


class LocalStorWatch {
    constructor(obj) { 
        this.obj = obj
           this.getArray = [];
    }

    saveLocalStorage() {
        const watched = localStorage.getItem('watched');
     const objString = JSON.stringify(this.obj)
        const array = []
    
        if (watched) { 
            if (watched.includes(objString)) {
            return alert('такой фильм уже есть')
            }
                const pars = JSON.parse(watched)
                array.push(...pars , this.obj)
                setStorageWatched(array)
        } else{
                array.push(this.obj)
                setStorageWatched(array)
            }
    }
    getLocalStorage() {
        const parseli = localStorage.getItem('watched')
        this.getArray.push(JSON.parse(parseli))
        return console.log(this.getArray)
    
}
}




// const localStorWatch = new LocalStorWatch( obj  );

// localStorWatch.getLocalStorage()

// localStorage.removeItem('watched')






class LocalStorQueue {
    constructor(obj) { 
        this.obj = obj
           this.getArray = [];
    }

    saveLocalStorage() {
        const queue = localStorage.getItem('queue');
        const array = []
    
        if (queue) { 
            if (queue.includes(JSON.stringify(this.obj))) {
            return alert('такой фильм уже есть')
            }
                const pars = JSON.parse(queue)
                array.push(...pars , this.obj)
                localStorage.setItem('queue', JSON.stringify(array))
        } else{
                array.push(this.obj)
                localStorage.setItem('queue', JSON.stringify(array))
            }
    }
    getLocalStorage() {
        const parseli = localStorage.getItem('queue')
        this.getArray.push(JSON.parse(parseli))
        return this.getArray
    
}
}


// const localStoreQueue = new LocalStorQueue( obj  );

// localStoreQueue.getLocalStorage()
// console.log(localStorage)
// localStorage.removeItem('queue')





function setStorageWatched(array) {
    localStorage.setItem('watched', JSON.stringify(array))

}


function setStorageQueue(array) {
    localStorage.setItem('queue', JSON.stringify(array))

}
