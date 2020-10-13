import * as Game from "../model/Game";
import * as gameView from "../views/gameView";

export const init = () => {
  //* THE GLOBAL STATE OF THE GAME
  // Game Color
  // Color tiles
  // Mode
  const state = {
    mode: false, //? Hard = false, Easy = true
  };

  //* GAME EVENTS
  //TODO: Start game and generate Game Color
  state.color = Game.generateRGB();

  //TODO: Generate color array w/ Game Color
  state.tiles = Game.rgbArr(state.mode);
  state.tiles.splice(
    Math.floor(Math.random() * state.tiles.length),
    0,
    state.color
  );

  //TODO: Display color to user
  gameView.renderTiles(state.tiles);
  gameView.renderDisplay(state.color);
  // console.log(state.tiles); //! TEST

  //TODO: Get input from user
  //TODO: Check for correct color
  //TODO: If correct, display result
  //TODO: If wrong, remove incorrect tile

  //* MODE EVENT
  gameView.Els.modeSwitch.addEventListener("click", (e) => {
    if (e.target.hasAttribute("checked")) {
      document.querySelectorAll(".switch-options");
      state.mode = true;
    }
    state.mode = false;
    console.log(document.getElementsByClassName(".switch-option")); //! TEST
    // console.log(e.target.hasAttribute("checked")); //! TEST
  }, false);

  //TODO: Toggle Switch
  //TODO: Update difficulty mode state

  //* REGENERATE EVENT
  //TODO: Generate a new color array

  console.log("Felicidades from the controller!");
};
