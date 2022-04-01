 let bg = document.querySelector('#bg');
    window.addEventListener('scroll', function(){
        let value = window.scrollY;
        bg.style.backgroundSize = 250 + value*2 + "px";

    })