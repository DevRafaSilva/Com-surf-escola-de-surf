export default function carroselEvent() {
  const prev = document.querySelector(".seta-prev");
  const prox = document.querySelector(".seta-prox");
  const slider = document.querySelectorAll(".slide-img");
  const numero = document.querySelectorAll(".numero-carrosel span");

  let slideIndex = 0;

  function hiderSlide() {
    slider.forEach((item) => item.classList.remove("on"));
    numero.forEach((item) => item.classList.remove("numero-on"));
  }

  function showSlide() {
    slider[slideIndex].classList.add("on");
    numero[slideIndex].classList.add("numero-on");
  }
  setInterval(() => {
    function nextSlider() {
      hiderSlide();
      if (slideIndex === slider.length - 1) {
        slideIndex = 0;
      } else {
        slideIndex++;
      }
      showSlide();
    }
    nextSlider();
  }, 10000);
  setInterval(() => {
    function prevSlider() {
      hiderSlide();
      if (slideIndex === 0) {
        slideIndex = slider.length - 1;
      } else {
        slideIndex--;
      }
      showSlide();
    }
    prevSlider();
  }, 5000);
}
