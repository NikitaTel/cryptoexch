const CurrencyChangesSlider = new Swiper('.currency-changes-slider', {
	
	wrapperClass: 'currency-changes-slider__wrapper',
	slideClass: 'currency-changes-slider__slide',
	navigation: {
		prevEl: '.currency-changes-slider__prev-el',
		nextEl: '.currency-changes-slider__next-el'
	},
	slidesPerView: 3,
	speed: 1000,
	observer: true
});
