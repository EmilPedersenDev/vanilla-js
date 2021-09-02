const input = document.getElementById("name");
const radio = document.getElementsByName("age");
const checkbox = document.getElementById("approve");
const citySelect = document.getElementById("city");

let name = "";
let radioValue = "";

const onRadioChange = (e) => {
  radioValue = e.target.value;
};

const onInput = (e) => {
  name = e.target.value;
};

const onSelect = (e) => {
  console.log(e.target.value);
};

const onCheckbox = (e) => {
  console.log(e.target.checked);
};

radio.forEach((item) => {
  item.addEventListener("change", (e) => {
    onRadioChange(e);
  });
});

checkbox.addEventListener("change", (e) => {
  onCheckbox(e);
});

input.addEventListener("input", (e) => {
  onInput(e);
});

citySelect.addEventListener("change", (e) => {
  onSelect(e);
});
