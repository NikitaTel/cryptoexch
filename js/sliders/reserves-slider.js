const reservesSlider = new Swiper('.reserves-slider', {

    wrapperClass: 'reserves-slider__wrapper',
    slideClass: 'reserves-slider__slide',
    navigation: {
        prevEl: '.reserves-slider__prev-el',
        nextEl: '.reserves-slider__next-el'
    },
    speed: 1000,
    spaceBetween: 18,
    slidesPerColumnFill: 'row',

    observer: true,
    breakpoints: {
        320: {
            slidesPerView: 2,
            slidesPerColumn: 1,
        },

        1200: {
            slidesPerView: 4,
            slidesPerColumn: 2,
        }
    }
});

const headerNewsSlider = new Swiper('.header_all_content_slider-box.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});

const mainNewsSlider = new Swiper('.slides2.border-r.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const certificatesSlider = new Swiper('.slides6.swiper-container', {
    breakpoints: {
        320: {
            slidesPerView: 1
        },

        1200: {
            slidesPerView: 4
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
