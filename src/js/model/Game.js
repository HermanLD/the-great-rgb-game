export default console.log("Felicidades from Game!");

//TODO: Generate random colors for RGB format
export const generateRGB = () => {
  //? RGB #s 0-255
  let num1 = Math.floor(Math.random()*256);
  let num2 = Math.floor(Math.random()*256);
  let num3 = Math.floor(Math.random()*256);

  return [num1, num2, num3];
}

//TODO: Stuff a num colors into an array depending to mode
//? This Generates an array w/o winning color
export const rgbArr = (mode) => {
  let colorBundle = [];
  if (mode === false) {
    for (let i = 0; i < 5; i++) {
      colorBundle.push(generateRGB());
    }
  }
  if (mode === true) {
    for (let i = 0; i < 2; i++) {
      colorBundle.push(generateRGB());
    }
  }
  // console.log(mode); //! TEST
  return colorBundle;

}

