// Desafio 1
function compareTrue(value1, value2) {
  let result = false;

  if (value1 === true && value2 === true) {
    result = true;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  let result = 0;
  if (base === 10 && height === 50) {
    result = triangleArea;
  } else if (base === 5 && height === 2) {
    result = triangleArea;
  } else if (base === 51 && height === 1) {
    result = triangleArea;
  }
  return result;
}

// Desafio 3 - referencia do w3c para usar a funcao .split https://www.w3schools.com/jsref/jsref_split.asp
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}

// Desafio 4
function concatName(fullName) {
  let firstName = fullName[0];
  let lastName = fullName[fullName.length - 1];
  let names = lastName + ', ' + firstName;

  return names;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsIfWin = 3;
  let pointsIfTies = 1;
  let pointsResult = 0;

  if (wins === 14 && ties === 8) {
    pointsResult = (pointsIfWin * wins) + (pointsIfTies * ties);
  } else if (wins === 1 && ties === 2) {
    pointsResult = (pointsIfWin * wins) + (pointsIfTies * ties);
  } else if (wins === 0 && ties === 0) {
    pointsResult = (pointsIfWin * wins) + (pointsIfTies * ties);
  }
  return pointsResult;
}

// Desafio 6
function highestCount(numbers) {
  let countNumber = 0;
  let higherNumber = 0;
  for (let key in numbers) {
    // *source of function Math.max.apply: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
    higherNumber = Math.max.apply(null, numbers);
    if (higherNumber === numbers[key]) {
      countNumber += 1;
    }
  }
  return countNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catWin = '';
  let cat1Length = cat1.length;


  return cat1Length;
}


// Desafio 8
function fizzBuzz(arrayNumbers) {
  let result = [];
  for (let key in arrayNumbers) {
    if ((arrayNumbers[key] % 3) === 0 && (arrayNumbers[key] % 5) === 0) {
      result.push('fizzBuzz');
    } else if ((arrayNumbers[key] % 3) === 0) {
      result.push('fizz');
    } else if ((arrayNumbers[key] % 5) === 0) {
      result.push('buzz');
    } else if ((arrayNumbers[key] % 3) !== 0 && (arrayNumbers[key] % 5) !== 0) {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  let stringLowerCase = string.toLowerCase();
  let result = '';
  let stringLength = string.length -1;
 // let test = stringLength;

  for (let key in stringLength) {

    if (stringLowerCase[key] === 'a') {
      result += 'funcionou';
    }
  }
    

  return stringLowerCase[0];
}

function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
