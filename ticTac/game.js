const square = document.querySelectorAll(".square");
const winningText = document.getElementById("winner");
let numOfClicks = 0;
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const hasWone = (currentChoice) => {
  allChoicesOngame = [];
  square.forEach((item) => {
    if (item.className.indexOf(currentChoice) > -1) {
      allChoicesOngame.push(item.id);
    }
  });

  let winner = [];

  winningConditions.forEach((choice) => {
    let checkMatch = choice.every((num) =>
      allChoicesOngame.includes(num.toString())
    );
    if (checkMatch) {
      winner.push({
        name: currentChoice,
        won: true,
      });
    }
  });

  if (winner.length > 0) {
    let paragraf = document.createElement("p");
    let winnerText = document.createTextNode(
      `Congratulations ${winner[0].name}`
    );
    paragraf.appendChild(winnerText);
    winningText.appendChild(paragraf);
  }
};

const addingCross = (e) => {
  if (e.target.className !== "square") return;
  let image = document.createElement("img");
  let currentChoice = "";
  if (numOfClicks % 2 === 0) {
    image.src = "close.svg";
    currentChoice = "close";
  } else {
    image.src = "circle.svg";
    currentChoice = "circle";
  }
  e.target.appendChild(image);
  e.target.classList.add(currentChoice);
  numOfClicks++;
  hasWone(currentChoice);
};

square.forEach((item) => {
  item.addEventListener("click", (e) => {
    addingCross(e, numOfClicks);
  });
});

console.log(square);
