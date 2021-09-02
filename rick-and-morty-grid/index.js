const grid = document.querySelector(".grid");
const input = document.querySelector("input");
let allCharacters = [];
let filteredCharacters = [];
let searchQuery = "";

function getAllCharacters() {
  return new Promise((res, rej) => {
    let url = "https://rickandmortyapi.com/api/character";
    axios.get(url).then((result) => {
      res(result.data.results);
    });
  });
}

getAllCharacters().then((result) => {
  allCharacters = result;
  filterCharacter();
});

function filterCharacter(e) {
  searchQuery = e ? e.target.value : "";
  grid.innerHTML = "";
  allCharacters.filter((character) => {
    if (character.name.toString().toLowerCase().indexOf(searchQuery) > -1) {
      let card = document.createElement("div");
      card.classList.add("card");
      let image = document.createElement("img");
      image.src = character.image;
      let name = document.createElement("h1");
      name.innerHTML = character.name;
      card.appendChild(image);
      card.appendChild(name);
      grid.appendChild(card);
    }
  });
}

input.addEventListener("input", filterCharacter);
