const inputLabel = document.querySelector("#font-size-control");
const spanLabel = document.querySelector("#text");
inputLabel.addEventListener("input", goUp);

function goUp(event) {
  spanLabel.style.fontSize = event.currentTarget.value + "px";
}
