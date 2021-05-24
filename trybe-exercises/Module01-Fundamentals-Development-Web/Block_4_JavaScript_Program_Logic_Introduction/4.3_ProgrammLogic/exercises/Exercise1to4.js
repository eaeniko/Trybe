// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:


let n = 5;
let square = '*';
let line = '';

// for (let index = 0; index < n; index += 1) {
//   line += square;
  
// }
// for (let index = 0; index < n; index += 1) {
//   console.log(line)
// }


for (let index = 0; index < n; index += 1) {
  line += square;
  console.log(line);
}

