const inputLabel = document.querySelector("#validation-input");

inputLabel.addEventListener("blur", onBlur);

function onBlur() {
  if (inputLabel.value.length === 6) {
    inputLabel.classList.add("valid");
    inputLabel.classList.remove("validation-input");
    inputLabel.classList.remove("invalid");
  } else {
    inputLabel.classList.add("invalid");
    inputLabel.classList.remove("validation-input");
    inputLabel.classList.remove("valid");
  }
}
