

class LocalStorWatch {
    constructor(id) {
        this.id = id
    }

    saveLocalStorage() {
        const watched = localStorage.getItem('watched');
        const array = []
    
        if (watched) {

            if (watched.includes(this.id)) {
               return alert('такой фильм уже есть')
            }

            array.push(watched , this.id)
            localStorage.setItem('watched', array)

        } else{
        array.push(this.id)
         localStorage.setItem('watched', array)
            console.log(array)
            }
    }
}



class LocalStorQueue {
    constructor(id) { 
        this.id = id
    }

    saveLocalStorage() {
        const queue = localStorage.getItem('queue');
        const array = []
    
        if (queue) { 
                        if (queue.includes(this.id)) {
               return alert('такой фильм уже есть')
            }
            array.push(queue , this.id)
              localStorage.setItem('queue', array)
        } else{
        array.push(this.id)
         localStorage.setItem('queue', array)
            console.log(array)
            }
    }
}


// const localStore = new LocalStorQueue( 44 );

// localStore.saveLocalStorage()
// console.log(localStorage)




// localStorage.removeItem('watched')
                    // const watchString = JSON.stringify(watched)










//         const array = [];
//         const index = array.indexOf(this.id)
//         console.log(index)

//         if (index === -1) {
//     array.push(this.id);
// }
//         array.splice(index, 1)
//         localStorage.setItem('watched', JSON.stringify(array));

//         return localStorage.getItem('watched')





// if (array.includes(this.name)) {
//     return'gg'
// }
//        array.push(this.name )
//             localStorage.setItem('watched', `[1,2,4,5,6]`);
//            const final = localStorage.getItem('watched')
//             return console.log(final)
//         }

//      localStorage.setItem('watched',  this.name)
           
//     //   const watched = localStorage.getItem('watched');
        
//             // const parsedSettings = JSON.parse(watched);
  
 
//             return console.log(localStorage.getItem('watched'))
        
//     }
// }
// const localStor = new LocalStor( 6 );