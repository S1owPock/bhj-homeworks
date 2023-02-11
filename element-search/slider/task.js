const slides = Array.from(document.querySelectorAll("div.slider__item"));
const right = document.getElementsByClassName("slider__arrow slider__arrow_next");
const left = document.getElementsByClassName("slider__arrow slider__arrow_prev");
let number = 0;

function hideSlide() {
    slides[number].className = "slider__item";
}

function showSlide() {
    slides[number].className = "slider__item slider__item_active";
}

function countSlide() {
    number = (number + slides.length) % slides.length;
}

right[0].onclick = () => {
    hideSlide();
    number++;
    countSlide();
    showSlide();
}

left[0].onclick = () => {
    hideSlide();
    number--;
    countSlide();
    showSlide();
}