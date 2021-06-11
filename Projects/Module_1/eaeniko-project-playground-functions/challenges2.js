// Desafio 10
// source to understand how to push an object inside and array https://stackoverflow.com/questions/15742442/declaring-array-of-objects
function techList (obj, name) {
  let objectList = [];

  if(obj.length === 0) {
    return 'Vazio!'; 
  } else { 
    obj.sort();
    
    for (let key in obj) {
      objectList.push({tech: obj[key], name: name});
    }
  }
    return objectList;
}


// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(string) {
  let getBebidas = /\d+/g;
  let drinks = string.match(getBebidas);
  let howManydrinks = 0;
  let coposAgua = ''

  for (let key in drinks) {
    
    howManydrinks += Number(drinks[key]);
    if (howManydrinks === 1) {
      coposAgua = howManydrinks + ' copo de água';

    } else {
      coposAgua = howManydrinks + ' copos de água';
    }
  }
  return coposAgua;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
