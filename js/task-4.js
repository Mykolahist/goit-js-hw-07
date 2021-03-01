let counterValue = 0;
const decrementBtn = document.querySelector('#counter').firstElementChild;
const incrementBtn = document.querySelector('#counter').lastElementChild;

function decrement() {
    counterValue -= 1;
    document.querySelector('#value').textContent = counterValue;
};

function increment() {
    counterValue += 1;
    document.querySelector('#value').textContent = counterValue;
};
    
decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

// const counter = {
//     value: 0,
//     increment() {
//         this.value -= 1;
//     },
//     decrement() {
//         this.value += 1;
//     },
// };
// const decrementBtn = document.querySelector('#counter').lastElementChild;
// const incrementBtn = document.querySelector('#counter').firstElementChild;
// const valueEl = document.querySelector('#value');

// decrementBtn.addEventListener('click', () => {
//     counter.decrement();
//     valueEl.textContent = counter.value;
// });

// incrementBtn.addEventListener('click', () => {
//     counter.increment();
//     valueEl.textContent = counter.value;
// });