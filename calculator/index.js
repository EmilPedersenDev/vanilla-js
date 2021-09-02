const allNumbersEl = document.getElementById("allNumbers");
const inputEl = document.querySelector(".calculator__screen");

const numbers = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "*",
  "/",
  "CE",
  "=",
];

let accumulator = null;
let previosOperand = "";

numbers.forEach((number, i) => {
  let pEl = document.createElement("button");
  pEl.addEventListener("click", setOperand);
  let text = document.createTextNode(number);
  pEl.appendChild(text);
  allNumbersEl.appendChild(pEl);
});

function setOperand(e) {
  let value = e.target.textContent;
  if (
    value !== "+" &&
    value !== "-" &&
    value !== "*" &&
    value !== "/" &&
    value !== "=" &&
    value !== "CE"
  ) {
    inputEl.value += value;
  } else if (value === "CE") {
    accumulator = 0;
    inputEl.value = "";
  } else if (value === "=") {
    equals();
  } else {
    calculate(value);
    inputEl.value = "";
  }
}

function calculate(value) {
  previosOperand = value;
  switch (value) {
    case "+":
      accumulator += +inputEl.value;
      break;

    default:
      break;
  }
}

function equals() {
  switch (previosOperand) {
    case "+":
      accumulator += +inputEl.value;
      inputEl.value = accumulator;
      accumulator = null;
      break;

    default:
      break;
  }
}
