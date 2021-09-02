// elements
const input = document.getElementById("todoInput");
const submit = document.getElementById("submitBtn");
const todoList = document.getElementById("todoList");

// variable
let inputValue = "";

// functions
const onHandleInput = (e) => {
  inputValue = e.target.value;
};

const onSubmit = () => {
  input.value = "";
  let listItem = document.createElement("li");
  let listItemValue = document.createTextNode(inputValue);

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "X";

  deleteBtn.onclick = () => {
    listItem.parentNode.removeChild(listItem);
  };

  listItem.appendChild(listItemValue);
  listItem.appendChild(deleteBtn);
  todoList.appendChild(listItem);
};

input.addEventListener("input", onHandleInput);
submit.addEventListener("click", onSubmit);
