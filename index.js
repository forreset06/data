function init(){
    //varable;
    const search_bar = document.createElement('input');

    //append element;
    document.body.append(search_bar);

    //styles;
    search_bar.style.borderRadius = '15%';
    search_bar.style.border = '2px solid black';
    search_bar.placeholder = 'search';
    search_bar.style.placeContent = 'center';
}

window.addEventListener('load',init,false);