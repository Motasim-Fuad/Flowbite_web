function changeBg(){
    var nab = document.getElementById('nab');
    var scrollValue = window.scrollY;
    
    if(scrollValue < 300){
        nab.classList.remove('colorbg');
    }else{
        nab.classList.add('colorbg');
    }
}

window.addEventListener('scroll', changeBg);