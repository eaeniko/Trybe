
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
