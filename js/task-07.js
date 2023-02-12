const fontSizeControlerEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeControlerEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    const number = event.currentTarget.value;
    textEl.style.fontSize = `${number}px`;
};