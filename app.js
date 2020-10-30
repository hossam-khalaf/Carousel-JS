let slidePosition = 0;
const slides = document.querySelectorAll('.carousel__item');

const totalSlides = slides.length;

document.getElementById('carousel__btn--next').addEventListener('click', () => {
  moveToNextSlide();
});

document.getElementById('carousel__btn--prev').addEventListener('click', () => {
  moveToprevSlide();
});

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}
function moveToprevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}
