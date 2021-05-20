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