$(document).ready(function(){
    $('.slide__item-four').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
      });
  })

const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const sideBar = document.querySelector('.sidebar')
const slideMain = document.querySelector('.slide-main')
const slideValue = slideMain.querySelectorAll('div').length
const container = document.querySelector('.container')
let indexSlide = 0; 
const containerHeight = container.clientHeight

  
sideBar.style.top = `-${(slideValue - 1) * 100}vh`

upButton.addEventListener('click', throttle(() => {
    changeSlide('up')
},1000))

downButton.addEventListener('click', throttle(() => {
    changeSlide('down')
}, 1000))


function changeSlide(str) {
    if(str === 'up'){
        indexSlide++
        if(indexSlide === slideValue){
            indexSlide = 0
        }
    }else if(str === 'down'){
        indexSlide--
        if(indexSlide < 0 ){
            indexSlide = slideValue -1
        }
    }

    
    slideMain.style.transform = `translateY(-${indexSlide * containerHeight}px)`
    sideBar.style.transform = `translatey(${indexSlide * containerHeight}px)`
    
}



document.onwheel = throttle(function(event){
    if(event.deltaY > 0 ){
        indexSlide++
        if(indexSlide === slideValue){
            indexSlide = 0
        }
    }else if(event.deltaY < 0){
        indexSlide--
        if(indexSlide < 0 ){
            indexSlide = slideValue -1
        }
    }

    slideMain.style.transform = `translateY(-${indexSlide * containerHeight}px)`
    sideBar.style.transform = `translatey(${indexSlide * containerHeight}px)`
},1000)

function throttle(callback,delay){
    let isWaiting = false;
    return function(...args){
        if(isWaiting){
            return
        }
        callback.apply(this, args);
        isWaiting = true;
        setTimeout(() => {
            isWaiting = false;
        }, delay)
    }
}

document.querySelector(".slideMain").addEventListener("click", function(e) {
    var parent = document.querySelector(".slideMain"),
      first = parent.querySelector(".slide-main_img"),
      last = parent.querySelector(".slide-main_img:last-child");
    if (e.target.classList.contains("arrow-top")) {
      parent.appendChild(first);
    }
    if (e.target.classList.contains("arrow-bottom")) {
      parent.insertBefore(last, first);
    }
  });

  $(document).ready(function(){
    $('.slider__bloger').slick(
        
      );
  })