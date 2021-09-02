// DOM bindings
let form = document.getElementById("form");
let name = document.getElementById("name");
let lastName = document.getElementById("lastname");
let password = document.getElementById("password");
let error = document.getElementById("error");
let inputs = document.querySelectorAll("input");

// JS
let storedUsers = JSON.parse(localStorage.getItem("users"));
let users = [];

if (storedUsers) {
  users = [...storedUsers];
}
console.log(users);
let user = { name: "", lastName: "", password: "" };

// JS functions
console.log(inputs);

inputs.forEach((e) => {
  e.addEventListener("change", onInputChange);
});

form.addEventListener("submit", submitForm);

function onInputChange(e) {
  error.innerHTML = "";
  error.classList.remove("error-visible");
}

function submitForm(e) {
  e.preventDefault();

  user = Object.assign({
    name: name.value ? name.value : "",
    lastName: lastName.value ? lastName.value : "",
    password: password.value ? password.value : "",
  });
  checkIfUserExist();
}

function checkIfUserExist() {
  if (Object.keys(user).length === 0) {
    error.innerHTML = "Du kan inte lämna fält tomma";
    error.classList.add("error-visible");
    return;
  }

  if (!users || users.length === 0) {
    users.push(user);
    return;
  }

  let isUserExisitng = users.find((item) => {
    if (item.name.toLowerCase() === user.name.toLowerCase()) {
      return item;
    }
    if (item.lastName.toLowerCase() === user.lastName.toLowerCase()) {
      return item;
    }
    if (item.password.toLowerCase() === user.password.toLowerCase()) {
      return item;
    }
  });

  if (!isUserExisitng) {
    users.push(user);
  } else {
    error.innerHTML = "Användaren finns redan";
    error.classList.add("error-visible");
  }

  localStorage.setItem("users", JSON.stringify(users));
}
