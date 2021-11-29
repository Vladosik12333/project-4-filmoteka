import template from '../templates/card-gallery.hbs';

const refs = {
    resultTemplate: document.querySelector('.gallery'),
    anchor: document.querySelector('.footer'),
}

export default function observeRendGallery(data){
    refs.resultTemplate.innerHTML = '';  
    // refs.resultTemplate.insertAdjacentHTML('beforeend', template(data));
    const step =6;
    let acc = 0;
    const onEntry = ([entrie]) => {
    if (entrie.isIntersecting) {
        if(data.slice(acc, acc+step)===0) return;
        
        refs.resultTemplate.insertAdjacentHTML('beforeend', template(data.slice(acc, acc+step)));          
        acc += step; 
    }
    };
    const observer = new IntersectionObserver(onEntry, {
    rootMargin: '200px',
    });
    observer.observe(refs.anchor);
}