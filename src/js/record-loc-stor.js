import LocalStor from './locale-stor.js'
import templete from '../templates/card-gallery.hbs'

const localStoreWatch = new LocalStor();

const resultTemplate = document.querySelector('.gallery')
const libraryWatchedBtn = document.querySelector('#library-watched')
const libraryQueueBtn = document.querySelector('#library-queue')
const modalWatchedBtn=document.querySelector("#modal-watched");
const modalQueueBtn=document.querySelector("#modal-queue");

let accObjLocflStorege ={};

libraryWatchedBtn.addEventListener('click', ()=>{
    libraryQueueBtn.classList.remove('button--is-active');
    libraryWatchedBtn.classList.add('button--is-active');
    renderWidthLocalStorege('watched');
})
libraryQueueBtn.addEventListener('click', ()=>{
    libraryWatchedBtn.classList.remove('button--is-active');
    libraryQueueBtn.classList.add('button--is-active');
    renderWidthLocalStorege('queue');
});

function renderWidthLocalStorege(value){
    const data = localStoreWatch.get(value)
    resultTemplate.innerHTML='';
    resultTemplate.insertAdjacentHTML('beforeend', templete(data));
}

function genereObjForLS(obj){
    console.log(obj);
    const acc =[];
    obj["genres"].forEach(el => {
        acc.push(el.name);          
    });
    
    return accObjLocflStorege = {
        "id": obj["id"],        
        "poster_path": obj["poster_path"],
        "title": obj["title"],
        "vote_average": obj["vote_average"],
        "genre": acc.slice(0, 2).join(', '),
        "release": parseInt(obj["release_date"])
    };
}

// class saveObjinLS{

// }
// modalWatchedBtn.addEventListener('click', ()=>{
//     localStoreWatch.saveWatched(accObjLocflStorege);
//     accObjLocflStorege={};
// });
// modalQueueBtn.addEventListener('click', ()=>{
//     localStoreWatch.saveQueue(accObjLocflStorege);
//     accObjLocflStorege={};
// });

export {renderWidthLocalStorege, genereObjForLS}