const sliderTrack = document.getElementById("slider-track");
const slideLeft = document.getElementById("slide-left");
const slideRight = document.getElementById("slide-right");

let currentIndex = 0;
const itemsToShow = 3;
const totalItems = sliderTrack.children.length;

slideRight.addEventListener("click", () => {
  if (currentIndex < totalItems - itemsToShow) {
    currentIndex++;
    updateSlider();
  }
});

slideLeft.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

function updateSlider() {
  const slideWidth = sliderTrack.children[0].offsetWidth;
  sliderTrack.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}
