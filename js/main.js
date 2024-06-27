const slider = document.querySelector('.participants__slider')
const sliderCard = document.querySelectorAll('.participants__card')
const sliderInner = document.querySelector('.participants__slider-line')
const count = document.getElementById('count')
let windowWidth = 0


const sliderNext = document.querySelector('.participants__btn-next')
const sliderPrev = document.querySelector('.participants__btn-prev')

let sliderCount = 0
let sliderWidth = slider.offsetWidth;

sliderNext.addEventListener('click', nextSlide)

sliderPrev.addEventListener('click', prevSlide)

function nextSlide(){
  sliderCount++
  windowWidth = window.innerWidth

  if(windowWidth > 1280){
    if(sliderCount > sliderCard.length / 2 ){
      sliderCount = 0
    }
    rollSliderDesc();
  } else if(windowWidth <= 1280 && windowWidth >= 768){
    if(sliderCount > (sliderCard.length / 2) +1 ){
      sliderCount = 0
    }
    rollSliderTablet();
  } else{
    if(sliderCount > sliderCard.length - 1 ){
      sliderCount = 0
    }
    rollSliderMobile();
  }
}

function prevSlide(){
  sliderCount--
  windowWidth = window.innerWidth

  if(windowWidth > 1280){
    if(sliderCount < 0){
      sliderCount = sliderCard.length / 2
    }
    rollSliderDesc();
  } else if(windowWidth <= 1280 && windowWidth >= 768){
    if(sliderCount <0  ){
      sliderCount = (sliderCard.length / 2) +1
    }
    rollSliderTablet();
  } else{
    if(sliderCount <0  ){
      sliderCount = sliderCard.length - 1
    }
    rollSliderMobile();
  }         
}

function rollSliderDesc(){
  sliderInner.style.transform = `translateX(${-sliderCount * (sliderWidth/3)}px)`
  count.innerHTML = `${sliderCount+3}`
}

function rollSliderTablet(){
  sliderInner.style.transform = `translateX(${-sliderCount * (sliderWidth/2)}px)`
  count.innerHTML = `${sliderCount+2}`
}

function rollSliderMobile(){
  sliderInner.style.transform = `translateX(${-sliderCount * sliderWidth}px)`
  count.innerHTML = `${sliderCount+1}`
}

setInterval(()=>{
  nextSlide()
}, 4000)

