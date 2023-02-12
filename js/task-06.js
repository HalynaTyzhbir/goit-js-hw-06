const inputEl = document.querySelector('#validation-input');
const validationValue = inputEl.dataset.length;

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    event.currentTarget.value.length != validationValue
        ? inputEl.classList.add('invalid')
        : inputEl.classList.replace('invalid', 'valid');
};