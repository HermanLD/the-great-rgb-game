import * as Game from "../model/Game";
import * as gameView from "../views/gameView";

export const init = () => {
  //* THE GLOBAL STATE OF THE GAME
  //? Game Color - [num, num, num]
  //? Color tiles array - [[num, num, num], ..., ...]
  //? Mode - true = easy; false = hard
  const state = {};

  function clearGame() {
    state.tiles = 0;
    state.color = 0;
    gameView.removeColors();
  }

  function runGame(currMode) {
    state.mode = currMode;

    //TODO: Generate Game Color
    state.color = Game.generateRGB();

    //TODO: Generate color array w/ Game Color
    state.tiles = Game.rgbArr(currMode);
    state.tiles.splice(
      Math.floor(Math.random() * state.tiles.length),
      0,
      state.color
    );

    //TODO: Display color to user
    gameView.renderTiles(state.tiles);
    gameView.renderDisplay(state.color);
    // console.log(state.tiles); //! TEST
  }

  //* START GAME
  runGame(false);

  //* GAME EVENTS
  //TODO: Get input from user
  //TODO: Check for correct color
  //TODO: If correct, display result
  //TODO: If wrong, remove incorrect tile

  //* MODE EVENT
  gameView.dom.modeSwitch.addEventListener(
    "click",
    (e) => {
      //TODO: Update difficulty mode state
      const newState = !state.mode;
      state.mode = newState;

      //TODO: Toggle Switch
      let switchOptions = gameView.dom.switch.querySelectorAll(
        ".switch-option"
      );
      switchOptions.forEach((option) => option.classList.toggle("hide"));

      clearGame();
      runGame(newState);

      // console.log(newState); //! TEST
      // console.log(e.target); //! TEST
    },
    false
  );

  //* REGENERATE EVENT
  //TODO: Generate a new color array
  gameView.dom.colorBtn.addEventListener("click", () => {
    clearGame();
    runGame(state.mode);
  });

  console.log("Felicidades from the controller!");
};
