export const dom = {
  colorGrid: document.querySelector(".color-grid"),
  colorDisplay: document.querySelector(".display-color"),
  colorBtn: document.querySelector(".btn"),
  switch: document.querySelector(".switch"),
  modeSwitch: document.querySelector("#mode-switch"),
};

function rgbFormat(colorCode) {
  return colorCode.join(", ");
};
function idFormat(colorCode) {
  return colorCode.join("-");
};

export const renderDisplay = (gameColor) => {
  dom.colorDisplay.textContent = `RGB(${rgbFormat(gameColor)})`;
  // console.log(gameColor); //! TEST
};

export const renderTiles = (arrTiles) => {
  arrTiles.forEach((tile) => {
    const markup = `
    <div
    class="color-grid-tile"
    id="${idFormat(tile)}"
    style="background-color: rgb(${rgbFormat(tile)})"></div>`;
    dom.colorGrid.insertAdjacentHTML("beforeend", markup);
    // console.log(el); //! TEST
  });
};

export const removeColors = () => {
  dom.colorGrid.innerHTML = "";
  dom.colorDisplay.innerHTML = "";
};
console.log("Felicidades from gameView!");
