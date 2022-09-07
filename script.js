const breakfastTile = document.querySelectorAll(".breakfast");
const lunchTile = document.querySelectorAll(".lunch");
const dinnerTile = document.querySelectorAll(".dinner");
const dessertTile = document.querySelectorAll(".dessert");
const snackTile = document.querySelectorAll(".snack");
const allTiles = document.querySelectorAll(".all");
const inputField = document.querySelector("#find");

console.log(allTiles)

const tiles = {
  "breakfast": breakfastTile,
  "lunch": lunchTile,
  "dinner": dinnerTile,
  "dessert": dessertTile,
  "snack": snackTile,
  "all": allTiles,
};


inputField.addEventListener("change", () => {
  let find = inputField.value;
  allTiles.forEach(tiles => tiles.classList.add("hidden"));
  tiles[find.toLowerCase()].forEach(tiles => tiles.classList.remove("hidden"));
  inputField.value = "";
})





