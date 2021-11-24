
//   const obj3 =    {
//           "adult": false,
//           "backdrop_path": "/kwkAGwtwdsdsS57FckZq6n44oipW1AN.jpg",
//           "genre_ids": [
//             2112,
//               27
//           ],
//           "id": 3331,
//           "original_language": "en",
//           "original_title": "AfdfdddsdsssssdsdAdddddsdsddRRRRAAYlien Outbreak",
//           "overview": "In a smalfdfl rural codsdsdsmmunity, local police officers Zoe and Patrick begin their shift as normal but soon, strange events unfold. Residents begin behaving erratically, and suicidal panic spreads amongst the township they are trying to protect. Zoe and Patrick realise alien machines are taking hold, cutting their small group of survivors off from the outside world. Can the determined humans band together to save their community, and all mankind, from extinction?",
//           "popularity": 222.115,
//           "poster_path": "/5m4Gwewe9cxcxwTRxUdDnx7UNn1bNLN54J.jpg",
//           "release_date": "2020-02-11",
//           "title": "Alien Outbreak",
//           "video": false,
//           "vote_average": 8,
//           "vote_count": 2000
// }

class LocalStor {
  constructor() { }

  _load (key)  {
  try {
    const getValue = localStorage.getItem(key);

    return getValue === null ? undefined : JSON.parse(getValue);
  } catch (err) {
    console.error('Get state error: ', err);
  }
};

 _save (key, value) {
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
      _save('queue', array)
    } else {
      array.push(obj)
      _save('queue', array)
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
    _save('watched',array)
} else{
    array.push(obj)
    _save('watched',array)

}
}
  getWatched() {
_load('watched')
}
    getQueue() {
_load('queue')
}
}




// const save = (key, value) => {
//   try {
//     const serializedState = JSON.stringify(value);
//     localStorage.setItem(key, serializedState);
//   } catch (err) {
//     console.error('Set state error: ', err);
//   }
// };



//     const load = key => {
//   try {
//     const serializedState = localStorage.getItem(key);

//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (err) {
//     console.error('Get state error: ', err);
//   }
// };
      


const localStor = new LocalStor();

// localStor.saveWatched(obj5);
localStor.saveWatched(obj3)
// localStor.saveWatched()
// localStor.getWatched();
// localStorage.removeItem('watched')



// localStor.saveQueue(obj5);
// localStor.saveQueue(obj3)
// localStor.saveQueue()
// localStor.getQueue();
// localStorage.removeItem('queue')

























// class LocalStorWatch {
// constructor() {
// }
//     saveLocalStorage(obj) {
//         const watchParse = JSON.parse(localStorage.getItem('watched'));
//         const array = []
        
//         if (watchParse) {
//      const uniqueId =  watchParse.find(num => num.id === obj.id)
//     if (uniqueId)   {
// return alert('такой фильм уже есть')
//     }

// array.push(...watchParse , obj)
//     save('watched',array)
// } else{
//     array.push(obj)
//     save('watched',array)

// }
// }
//     getLocalStorage() {
    
// load('watched')
// }
// }














// class LocalStorWatch {
// constructor() {
// }
// saveLocalStorage(obj) {
// const queue = localStorage.getItem('watched');
// const array = []
// if (queue) {
// if (queue.includes(JSON.stringify(obj))) {
// return alert('такой фильм уже есть')
// }
// const pars = JSON.parse(queue)
// array.push(...pars , obj)
// localStorage.setItem('watched', JSON.stringify(array))
// } else{
// array.push(obj)
// localStorage.setItem('watched', JSON.stringify(array))
// }
// }
// getLocalStorage() {
//         const parseli = localStorage.getItem('watched')
//     return JSON.parse(parseli)
    
  

// }

// const localStoreWatch = new LocalStorWatch();

// localStoreWatch.saveLocalStorage(obj3);
// localStoreWatch.saveLocalStorage(obj3)
// localStoreWatch.saveLocalStorage()
// localStoreWatch.getLocalStorage();
// localStorage.removeItem('watched')

// const localStoreQueue = new LocalStorQueue();

// localStoreQueue.saveLocalStorage(obj1);
// localStoreQueue.saveLocalStorage(obj3)
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

