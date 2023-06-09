const counterValue = document.querySelector("#value");
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

let value = 0;

incrementButton.addEventListener("click", () => {
  value++;
  counterValue.textContent = value;
  counterValue.style.color = "green";
});
decrementButton.addEventListener("click", () => {
  value--;
  counterValue.textContent = value;
  counterValue.style.color = "red";
});
