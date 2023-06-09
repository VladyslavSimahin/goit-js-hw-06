const refs = {
  input: document.querySelector("login-form.name"),
  password: document.querySelector("login-form.password"),
  button: document.querySelector("login-form.button"),
};

function handleFormSubmit(event) {
  event.preventDefault();
  console.log("Отправка!");
}

refs.button.addEventListener("submit", handleFormSubmit);
