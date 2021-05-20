// 1.
let a = 5;
let b = 3;

let adicao = a + b;
let sub = a - b;
let multi = a * b;
let div = a / b;
let mod = (a % b) == 0;

console.log(adicao);
console.log(sub);
console.log(multi);
console.log(div);
console.log(mod);

// 2.
let a = 10;
let b = 4;
let resultado = 0;
if (a > b) {
  resultado = a;
  console.log(a);
} else {
  console.log(b);
}

// 3.
let a = 10;
let b = 15;
let c = 31;
let resultado = 0;
if (a > b && a > c) {
  resultado = a;
  console.log(a);
} else if (b > c) {
  resultado = b;
  console.log(b);
} else {
  console.log(c);
}

// 4.
let a = -5;

if (a > 0) {
  console.log('Positive');
} else if (a < 0) {
  console.log('Negative');
} else {
  console.log('zero');
}

// 5.
let angulo1 = 30;
let angulo2 = 50;
let angulo3 = 'a';

if (angulo1 + angulo2 + angulo3 == 180) {
  let resultado = true;
  console.log(resultado);
} else if (angulo1 + angulo2 + angulo3 < 180) {
  let resultado = false;
  console.log(resultado);
} else {
  console.log('Errors, check the angles numbers.');
}
// 6.

let xadrez = 'King';
let peca = xadrez.toLowerCase();
if (peca == 'king') {
  console.log('Rei anda em todas as direções');
} else {
  console.log('peça invalidada');
}

// 7.

let nota = 81;

if (nota >= 90 && nota <= 100) {
  console.log('A');
} else if (nota >= 80 && nota < 90) {
  console.log('B');
} else if (nota >= 70 && nota < 80) {
  console.log('C');
} else if (nota >= 60 && nota < 70) {
  console.log('D');
} else if (nota >= 50 && nota < 60) {
  console.log('E');
} else if (nota < 50 && nota >= 0) {
  console.log('F');
}  else {
  console.log('Nota invalida');
}

// 8.

let a = 1;
let b = 3;
let c = 7;

if ((a % 2) == 0 || (b % 2) == 0 || (c % 2) == 0 ) {
  let resultado = true;
  console.log(resultado);
} else {
  let resultado = false;
  console.log(resultado);
}