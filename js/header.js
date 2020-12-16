//menu
const openHeaderMenu = () => {
  const el = document.querySelector('.header-nav');
  el.style.display = 'flex';
}

const closeHeaderMenu = () => {
  const el = document.querySelector('.header-nav');
  el.style.display = 'none';
}

//slider
const showSlide = (sliderSelector, slidesSelector, dotsSelector) => {
  const slider = document.querySelector(sliderSelector);
  const slides = slider.querySelectorAll(slidesSelector);
  const dots = document.querySelectorAll(dotsSelector);
  const slidesCnt = slider.length;
  return (slideNum) => {
    if(currSlide===slideNum){
      return;
    }
    slides[currSlide].style.display = 'none';
    slides[slideNum % slidesCnt].style.display = 'block';
    dots[currSlide].classList.remove('active-slide-dot');
    dots[slideNum % slidesCnt].classList.add('active-slide-dot');
    currSlide = slideNum;
  }
}

let currSlide = 0;

const nextSlide = (showSlideFunc) => {
  return (relativePosition) => {
    showSlideFunc(currSlide+= relativePosition);
  }
}

const showHeaderSlide = showSlide('.header_all_content_slider-box_wrapper', '.header-news', '.slide-dots');
const nextHeaderSlide = nextSlide(showHeaderSlide);
