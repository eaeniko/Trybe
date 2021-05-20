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
