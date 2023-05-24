window.addEventListener('DOMContentLoaded', ()=> {

    // --- Burger-menu ---
  
    const menu = document.querySelector('.burger-menu');
    const Container = document.querySelector('.container');
    const Burger = document.querySelector('.menu__burger');
    const menuClose = document.querySelector('.menu__close');
  
    menu.addEventListener ('click', () => {
        Container.classList.add('_open')
        Burger.classList.add('_open')
    })
  
    menuClose.addEventListener('click',() => {
        Container.classList.remove('_open')
        Burger.classList.remove('_open')
    })
  
    Container.addEventListener('click',(e) => {
        if (e.target == Container) {
            Burger.classList.remove('_open')
            Container.classList.remove('_open')
        }
    })
  
    //---Pop up---

    const Comments = document.querySelectorAll('.comments__card-container')
    const Popup = document.querySelector('.popup')
    const Card = document.querySelector('.popup__card')
    const PopupClose = document.querySelector('.popup__close');
  
  
    Comments.forEach ((item) => {
        item.addEventListener('click', ()=> {
            if (window.matchMedia("(max-width: 780px)").matches) {
                Popup.classList.add('_show-popup')
                Card.innerHTML = '';
                Card.append(item.cloneNode(true))
            }
        })
    })
  
    Popup.addEventListener('click',(e) => {
        if (e.target == Popup || e.target == PopupClose) {
            Popup.classList.remove('_show-popup')
            Card.innerHTML = '';
        }
    })
  
    //---Scroll---
  
    window.addEventListener("resize", (e) => {
        width = Comments[0].clientWidth
        rangeValue ()
    });
  
    const Scroll = document.querySelector('input[type="range"]');
  
    let width = Comments[0].clientWidth;
  
    let gap = 30; 
  
    Scroll.addEventListener("input",rangeValue)
  
    function rangeValue () {
        if (window.matchMedia("(min-width: 781px)").matches) {
            Comments[0].style.marginLeft =`${Scroll.value * (width + gap) * -1}px`  
        }
    }
  
  
  // ---Slider---
  
    const Next = document.querySelector('.slider__arrow-right')
    const Prev = document.querySelector('.slider__arrow-left')
  
    const Pets = document.querySelector('.slider');
  
    const SliderCards = document.querySelectorAll('.slider__card')
  
    function getSlides () {
        let arrCards = []

        for (const slide of SliderCards) arrCards.push(slide.cloneNode(true))
        return arrCards.sort(() => Math.random() - 0.5)    
    }
  
    let SliderWidth = Pets.clientWidth;
  
    let currentSlide = document.querySelector('.slider__column')
  
    function nextSlide () {
        let Cards = getSlides()
        let nextContainer = document.createElement('div')
        nextContainer.className = 'slider__column'
        nextContainer.append(...Cards)
        Pets.append(nextContainer)
    }
  
  
    function prevSlide () {
        let Cards = getSlides()
        let prevContainer = document.createElement('div')
        prevContainer.className = 'slider__column'
        prevContainer.append(...Cards)
        Pets.prepend(prevContainer)
        prevContainer.style.marginLeft = `${-SliderWidth}px`
        return prevContainer
    }
  
    function moveLeft (){
        nextSlide ()
        currentSlide.style.marginLeft = `${-SliderWidth}px` 
         
        setTimeout(() => {
            currentSlide.remove()
            currentSlide = document.querySelector('.slider__column')
            Next.addEventListener('click', moveLeft)
        },501)
      
            Next.removeEventListener('click', moveLeft)
    }
  
    function moveRight (){
        prevContainer = prevSlide()

        setTimeout(() => {
            prevContainer.style.marginLeft = `0px`   
          }, 0)
  
        setTimeout(() => {
            currentSlide.remove()
            currentSlide = document.querySelector('.slider__column')
            Prev.addEventListener('click', moveRight)
        },501)
      
        Prev.removeEventListener('click', moveRight)
    }
  
    Next.addEventListener('click', moveLeft)
  
    Prev.addEventListener('click', moveRight)
  
  
    window.addEventListener("resize", (e) => {
        Comments[0].style.marginLeft =`0px`
        width = Comments[0].clientWidth
        SliderWidth = Pets.clientWidth;
    });
  })