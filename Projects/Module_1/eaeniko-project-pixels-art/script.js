const divPixelBoard = document.querySelector('#pixel-board');
const colorPallet = document.getElementById('color-palette');
const blackPallet = document.getElementById('black').style.backgroundColor = 'black';
const bluePallet = document.getElementById('blue').style.backgroundColor = 'blue';
const redPallet = document.getElementById('red').style.backgroundColor = 'red';
const greenPallet = document.getElementById('green').style.backgroundColor = 'green';
const clearBoardBtn = document.getElementById('clear-board');

function createPixels() {
  for (let index = 0; index < 25; index += 1) {
    const div = document.createElement('div');

    divPixelBoard.appendChild(div);
    div.className = 'pixel';
  }
}

function changeColorSelected(event) {
  const currentColor = document.querySelector('.selected');
  const clikedColor = event.target;
  currentColor.className = 'color';
  clikedColor.className += ' selected';
}

function paintPixel(event) {
  const pixel = event.target;
  const currentColor = document.querySelector('.selected');
  pixel.style.backgroundColor = currentColor.style.backgroundColor;
    console.log(event.target);
}

function clearBoard() {
  const pixel = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

window.onload = function () {
  createPixels();
  colorPallet.addEventListener('click', changeColorSelected);
  divPixelBoard.addEventListener('click', paintPixel);
  clearBoardBtn.addEventListener('click', clearBoard);
};
