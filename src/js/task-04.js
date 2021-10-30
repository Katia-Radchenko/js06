let counterValue = 0;

const btnDecrement = document.querySelector(['button[data-action="decrement"]']);
const btnIncrement = document.querySelector(['button[data-action="increment"]']);



btnDecrement.addEventListener("click", () => {
    counterValue -= 1;
  document.querySelector('#value').textContent = counterValue;
})

btnIncrement.addEventListener("click", () => {
    counterValue += 1;
  document.querySelector('#value').textContent = counterValue;
})