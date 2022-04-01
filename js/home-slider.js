// ZONA DEL CARTEL - SLIDER VERTICAL

const contenedorSlider = document.querySelector(".contenedor-slider");  
const slideDerecho = document.querySelector(".slide-derecho");  
const slideIzquierdo = document.querySelector(".slide-izquierdo");  
const subirButton = document.querySelector(".subir-button");  
const bajarButton = document.querySelector(".bajar-button");  
const slidesLength = slideDerecho.querySelectorAll("div").length;  

let activeSlideIndex = 0;  
slideIzquierdo.style.top = `-${(slidesLength - 1) * 100}vh`;  
const changeSlide = (direction) => {  
const sliderHeight = contenedorSlider.clientHeight;  

if (direction === "subir") {  
    activeSlideIndex++;  
    if (activeSlideIndex > slidesLength - 1) activeSlideIndex = 0;  
        } else if (direction === "bajar") {  
            activeSlideIndex--;  
    if (activeSlideIndex < 0) activeSlideIndex = slidesLength - 1;  
    }  

    slideDerecho.style.transform = `translateY(-${  
        activeSlideIndex * sliderHeight }px)`;  
        slideIzquierdo.style.transform = `translateY(${  
            activeSlideIndex * sliderHeight  
            }px)`;  
    }; 

subirButton.addEventListener("click", () => changeSlide("subir"));  
bajarButton.addEventListener("click", () => changeSlide("bajar"));   