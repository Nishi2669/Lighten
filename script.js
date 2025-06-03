const spinn=document.querySelector(".load");
setTimeout(()=> {
    spinn.style.display='none';
} , 2000);

document.addEventListener('DOMContentLoaded', function() {
const slides = document.querySelectorAll('.slider-bg');
const slider = document.querySelector('.slider');
const prevArrow = document.getElementById('prevArrow');
const nextArrow = document.getElementById('nextArrow');
let currentIndex = 0;
const intervalTime = 4000; // Time in milliseconds for the automatic slide (e.g., 5000ms = 5 seconds)
let autoSlideInterval; // Variable to store the interval
let autoSlideTimeout; // Variable to store the timeout for resuming the auto-slide

function updateCurrent(index) {
slider.style.transform = `translateX(-${index * 100}%)`;
}

function startAutoSlide() {
// Clear any existing intervals to avoid multiple intervals running simultaneously
clearInterval(autoSlideInterval);
autoSlideInterval = setInterval(() => {
  nextArrow.click();
}, intervalTime);
}

function pauseAutoSlide() {
// Clear the interval to stop auto-sliding
clearInterval(autoSlideInterval);
// Clear any existing timeout to avoid multiple timeouts running simultaneously
clearTimeout(autoSlideTimeout);
// Resume auto-sliding after a period of inactivity (e.g., 10 seconds)
autoSlideTimeout = setTimeout(startAutoSlide, 10000);
}

prevArrow.addEventListener('click', () => {
currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
updateCurrent(currentIndex);
pauseAutoSlide();
});

nextArrow.addEventListener('click', () => {
currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
updateCurrent(currentIndex);
pauseAutoSlide();
});

// Initialize the first slide as active
updateCurrent(currentIndex);

// Start the automatic slide function
startAutoSlide();
});

document.addEventListener('DOMContentLoaded', function() {
const client_slides = document.querySelectorAll('.client-lower');
const client_slider = document.querySelector('.client-main');
const dots = document.querySelectorAll('.one');
let currentIndex = 0;
const intervalTime = 3000; 
let autoSlideInterval;
let autoSlideTimeout;

function updateCurrent(index) {
client_slider.style.transform = `translateX(-${index * 100}%)`;
dots.forEach(dot => dot.classList.remove('active'));
dots[index].classList.add('active');
}

function startAutoSlide() {
clearInterval(autoSlideInterval);
autoSlideInterval = setInterval(() => {
  currentIndex = (currentIndex === client_slides.length - 1) ? 0 : currentIndex + 1;
  updateCurrent(currentIndex);
}, intervalTime);
}

function pauseAutoSlide() {
clearInterval(autoSlideInterval);
clearTimeout(autoSlideTimeout);
autoSlideTimeout = setTimeout(startAutoSlide, 10000);
}

dots.forEach(dot => {
dot.addEventListener('click', () => {
  currentIndex = parseInt(dot.getAttribute('data-index'));
  updateCurrent(currentIndex);
  pauseAutoSlide();
});
});

// Initialize the first slide as active
updateCurrent(currentIndex);

// Start the automatic slide function
startAutoSlide();
});
