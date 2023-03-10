function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const nameColor = document.querySelector('.color');
const buttonChangeColor = document.querySelector('.change-color');

buttonChangeColor.addEventListener('click',
  () => {
    const color = getRandomHexColor();
    body.style.background = color;
    nameColor.textContent = color;
});

