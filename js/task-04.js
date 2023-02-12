const counter = {
    counterValue: 0,
    increment(counterValue) {
        this.counterValue += counterValue;
    },
    decrement(counterValue) {
        this.counterValue -= counterValue;
    },
};

const valueEl = document.querySelector('#value');
const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]')


decrementEl.addEventListener('click',
    () => {
        counter.decrement(1);
        valueEl.textContent = counter.counterValue;
    });

incrementEl.addEventListener('click',
    () => {
        counter.increment(1);
        valueEl.textContent = counter.counterValue;
    });


