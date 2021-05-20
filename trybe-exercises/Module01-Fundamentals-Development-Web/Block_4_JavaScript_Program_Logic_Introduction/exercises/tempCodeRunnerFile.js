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