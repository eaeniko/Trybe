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

// 9.

let a = 10;
let b = 30;
let c = 2;
if ((a % 2) == 1 || (b % 2) == 1 || (c % 2) == 1 ) {
  let resultado = true;
  console.log(resultado);
} else {
  let resultado = false;
  console.log(resultado);
}

// 10.

let produto = 50;
let custoProduto = 0;
let vendaProduto = 100;
let lucro = 0;
let imposto = 20;

custoProduto = produto + (produto/100) * imposto;
lucro = vendaProduto - custoProduto;

console.log(lucro);

// 11.


let salarioBruto = 3000;
let salarioLiquido = 0;
let salarioBase = 0;
let inss1 = 1556.94;
let inss2 = 2594.92;
let inss3 = 5189.82;
let inss4 = 570.88;
let juros = 0;


if (salarioBruto <= inss1) {
  juros = (salarioBruto/100) * 8;
  salarioBase = salarioBruto - juros;
  console.log(salarioBase);

} else if (salarioBruto > inss1 && salarioBruto <= inss2) {
  juros = (salarioBruto/100) * 9;
  salarioBase = salarioBruto - juros;
  console.log(salarioBase);

} else if (salarioBruto > inss2 && salarioBruto <= inss3) {
  juros = (salarioBruto/100) * 11;
  salarioBase = salarioBruto - juros;
  console.log(salarioBase);

} else if (salarioBruto > inss3) {
  juros = (salarioBruto/100) * 9;
  salarioBase = salarioBruto - juros;
  console.log(salarioBase);
} else {
  console.log('Valor invalido');
}

let ir = 1903.98;
let ir2 = 2826.65;
let ir3 = 3751.05;
let ir4 = 4664.68;
let ir5 =  4664.69;


let aliquota22Porcento = 22.5;
let aliquota27Porcento = 27.5;

let imposto4 = 636.13;
let imposto5 = 869.36;


if (salarioBase <= ir) {
  console.log('Isento de IR');
} else if (salarioBase > ir && salarioBase <= ir2) {
  let imposto2 = 142.80;
  let aliquota7Porcento = 7.5;

  let descontosIR = (salarioBase/100) * aliquota7Porcento - imposto2;
  console.log(descontosIR.toFixed(2));
  salarioLiquido = salarioBase - descontosIR;
  console.log(salarioLiquido);
  

} else if (salarioBase > ir && salarioBase <= ir2) {
  let imposto3 = 354.80;
  let aliquota15Porcento = 15;

  let descontosIR = (salarioBase/100) * aliquota7Porcento - imposto2;
  console.log(descontosIR.toFixed(2));
  salarioLiquido = salarioBase - descontosIR;
  console.log(salarioLiquido);
}
