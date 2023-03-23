// Custom JS

// Custom Slider/Carousel 
const track = document.querySelector(".slider__track");
const slides = Array.from(track.children);

const nextButton = document.querySelector(".slider__button--right");
const prevButton = document.querySelector(".slider__button--left");
const dotsNav = document.querySelector(".slider__nav");
const dots = Array.from(dotsNav.children);
const sliderContainer = document.querySelector('.slider__track-container');

const slideWidth = slides[0].getBoundingClientRect().width;

// Capture max height of inner carousel slide
let maxSlideHeight = 0;

//FUNCTIONS

// Arrange slides next to each other
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";

// Set Height of tallest slide to default slide height
  let ht = slide.querySelector('.slider__slide--inner').getBoundingClientRect().height;
  if (ht > maxSlideHeight) {
   maxSlideHeight = ht;
  }
};

slides.forEach(setSlidePosition);

// sliderContainer.style.height = maxSlideHeight + "px";

// Function for left/right button
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

// when I click nav indicator move to that slide
dotsNav.addEventListener("click", (e) => {
  //What indicator was clicked on?
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
});