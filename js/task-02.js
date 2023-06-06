const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const productsContainerEl = document.querySelector("#ingredients");

const element = ingredients.map((option) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = option;
  return liEl;
});

console.log(element);

productsContainerEl.append(...element);
