export const Els = {
  colorGrid: document.querySelector(".color-grid"),
  colorDisplay: document.querySelector(".display-color"),
  colorBtn: document.querySelector(".btn"),
  modeSwitch: document.querySelector("#mode-switch"),
};

function rgbFormat(colorCode) {
  return colorCode.join(", ");
};
function idFormat(colorCode) {
  return colorCode.join("-");
};

export const renderDisplay = (gameColor) => {
  Els.colorDisplay.textContent = `RGB(${rgbFormat(gameColor)})`;
  // console.log(gameColor); //! TEST
};

export const renderTiles = (arrTiles) => {
  arrTiles.forEach((tile) => {
    const markup = `
    <div
    class="color-grid-tile"
    id="${idFormat(tile)}"
    style="background-color: rgb(${rgbFormat(tile)})"></div>`;
    Els.colorGrid.insertAdjacentHTML("beforeend", markup);
    // console.log(el); //! TEST
  });
};
console.log("Felicidades from gameView!");
