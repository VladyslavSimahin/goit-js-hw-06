const refs = {
  input: document.querySelector("#name-input"),
  nameSpam: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);
function onInputChange(event) {
  refs.nameSpam.textContent =
    event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value;
}
