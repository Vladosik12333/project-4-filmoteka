
// const obj1 = {
// name: "vaasya",
// vote: "8.3",
// votes: "12000000",
// popularity: "100,2",
// genre: "Western",
// about: "Four of the West’s most infamous outlaws assemble to steal a huge stash of gold from the most corrupt settlement of the gold rush towns. But not all goes to plan one is killed and the other three escapes with bags of gold hide out in the abandoned gold mine where they happen across another gang of three – who themselves were planning to hit the very same bank! As tensions rise, things go from bad to worse as they realise the bags of gold are filled with lead... they’ve been double crossed – but by who and how?", img: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ci5A9TPmNajMxt1L8p4KlZ76sc9.jpg"
// }

class LocalStorQueue {
constructor() {
}
saveLocalStorage(obj) {
const queue = localStorage.getItem('queue');
const array = []
if (queue) {
if (queue.includes(JSON.stringify(obj))) {
return alert('такой фильм уже есть')
}
const pars = JSON.parse(queue)
array.push(...pars , obj)
localStorage.setItem('queue', JSON.stringify(array))
} else{
array.push(obj)
localStorage.setItem('queue', JSON.stringify(array))
}
}
getLocalStorage() {
        const parseli = localStorage.getItem('queue')
        return JSON.parse(parseli)
}
}

class LocalStorWatch {
constructor() {
}
saveLocalStorage(obj) {
const queue = localStorage.getItem('watched');
const array = []
if (queue) {
if (queue.includes(JSON.stringify(obj))) {
return alert('такой фильм уже есть')
}
const pars = JSON.parse(queue)
array.push(...pars , obj)
localStorage.setItem('watched', JSON.stringify(array))
} else{
array.push(obj)
localStorage.setItem('watched', JSON.stringify(array))
}
}
getLocalStorage() {
        const parseli = localStorage.getItem('watched')
        return JSON.parse(parseli)
}
}

// const localStoreWatch = new LocalStorWatch();

// localStoreWatch.saveLocalStorage(obj3);
// localStoreWatch.saveLocalStorage(obj3)
// localStoreWatch.saveLocalStorage()
// localStoreWatch.getLocalStorage();
// localStorage.removeItem('watched')

// const localStoreQueue = new LocalStorQueue();

// localStoreQueue.saveLocalStorage(obj1);
// localStoreQueue.saveLocalStorage(obj2)
// localStoreQueue.saveLocalStorage()
// localStoreQueue.getLocalStorage();
// localStorage.removeItem('queue')


// class LocalStorQueue {
//     constructor(obj) { 
//         this.obj = obj
//            this.getArray = [];
//     }

//     saveLocalStorage() {
//         const queue = localStorage.getItem('queue');
//         const array = []
    
//         if (queue) { 
//             if (queue.includes(JSON.stringify(this.obj))) {
//             return alert('такой фильм уже есть')
//             }
//                 const pars = JSON.parse(queue)
//                 array.push(...pars , this.obj)
//                 localStorage.setItem('queue', JSON.stringify(array))
//         } else{
//                 array.push(this.obj)
//                 localStorage.setItem('queue', JSON.stringify(array))
//             }
//     }
//     getLocalStorage() {
//         const parseli = localStorage.getItem('queue')
//         this.getArray.push(JSON.parse(parseli))
//         return this.getArray
    
// }
// }

// const localStoreQueue = new LocalStorQueue( obj1  );

// localStoreQueue.saveLocalStorage()
// console.log(localStorage)
// localStorage.removeItem('queue')

