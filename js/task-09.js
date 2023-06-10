function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyElement = document.body;
const spanColor = document.querySelector(".color");
const button = document.querySelector(".change-color");

button.addEventListener("click", () => {
  const randomColor = getRandomHexColor();

  bodyElement.style.backgroundColor = randomColor;

  spanColor.textContent = randomColor;
});
