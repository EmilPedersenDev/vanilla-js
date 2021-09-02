const toggleEl = document.querySelector(".toggle");
const sliderEl = document.querySelector(".slider");
const radioEl = document.getElementsByClassName("radio");
const checkboxEl = document.getElementsByClassName("checkbox-group");
const inputEl = document.getElementById("input-1");

let isToggled = false;

console.log("sdfds");

inputEl.addEventListener("change", (e) => {
  let inputTarget = e.target;

  if (inputTarget.value) {
    inputTarget.labels[0].classList.add("active");
  } else {
    inputTarget.labels[0].classList.remove("active");
  }
});

toggleEl.addEventListener("click", toggle);
[...radioEl].forEach((radio) => {
  radio.addEventListener("input", (e) => {
    console.log(e.target.value);
  });
});

[...checkboxEl].forEach((checkbox) => {
  checkbox.addEventListener("change", (e) => {
    console.log(e.target.checked);
  });
});

function toggle() {
  isToggled = !isToggled;

  if (isToggled) {
    toggleEl.classList.add("is-toggled");
  } else {
    toggleEl.classList.remove("is-toggled");
  }
}
