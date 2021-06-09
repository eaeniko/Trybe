let stateLabelOptions = document.getElementById('estado');
let states = ['São Paulo', 'Minas Gerais', 'Rio de Janeiro', 'Outro'];

function loadStates() {
  for (let index = 0; index < states.length; index += 1) {
    let stateOption = document.createElement('option');
    stateOption.value = states[index];
    stateOption.innerText = states[index];
    stateLabelOptions.appendChild(stateOption);
    console.log(stateOption);
  }
}


window.onload = function() {

  loadStates();
};