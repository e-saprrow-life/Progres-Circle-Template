'use strict'
let sliderSpeed = 1000; //Скорость прокрутки слайдера


let headerSlider = new Swiper('.swiper-container', {
    navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev'
	  },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    simulateTouch: true, 
    grabCursor: true,
    slideToClickedSlide: false,
    speed: sliderSpeed,
    effect: 'slide',
    autoHeight: false,
    slidesPerView: 3,
    slidesPerGroup: 3,
    centeredSlides: false,
    loop: false
});
