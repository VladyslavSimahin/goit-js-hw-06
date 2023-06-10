const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = loginForm.email.value;
  const password = loginForm.password.value;

  if (email === "" || password === "") {
    alert("Пожалуйста, заполните все поля.");
  } else {
    const formData = {
      email: email,
      password: password,
    };
    console.log(formData);

    loginForm.reset();
  }
});
