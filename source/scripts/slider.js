const rangeInput = document.querySelector('.slider__range');
const afterImage = document.querySelector('.slider__image--after');
const beforeImage = document.querySelector('.slider__image--before');


rangeInput.addEventListener('input', (event) => {
  const value = event.target.value;
  beforeImage.style.clipPath = `inset(0 ${value}% 0 0)`;
  afterImage.style.clipPath = `inset(0 0 0 ${100 - value}%)`;
});
