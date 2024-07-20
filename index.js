//RANDOM FACT BUTTON FUNCTIONS
const funFacts = [
  "I was a swimmer in high school.",
  "I was an avid artist.",
  "I had a pet dog named Isabella from the time I was 13 to 26.",
  "I enjoy going to the gym.",
  "My favorite series is Lord of the Rings.",
];

function getRandomNumber(factLength) {
  return Math.floor(Math.random() * factLength);
}

function displayRandomFunFact() {
  const randomIndex = getRandomNumber(funFacts.length);
  const funFact = funFacts[randomIndex];
  document.getElementById("fun-facts").innerText = funFact;
}

document
  .getElementById("fun-facts-button")
  .addEventListener("click", displayRandomFunFact);

//SLIDE SHOW FUNCTIONS
const slides = document.querySelectorAll("#slides .slide");
let slideIndex = 0;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  slides[slideIndex].classList.add("displaySlide");
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}

document.querySelector(".prev").onclick = function () {
  slideIndex--;
  showSlide(slideIndex);
};

document.querySelector(".next").onclick = function () {
  slideIndex++;
  showSlide(slideIndex);
};

//HAMBURGER FUNCTION
const hamburger = document.querySelector(".hamburger");

const sideMenu = document.querySelector(".side-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    sideMenu.classList.toggle("active");
});
