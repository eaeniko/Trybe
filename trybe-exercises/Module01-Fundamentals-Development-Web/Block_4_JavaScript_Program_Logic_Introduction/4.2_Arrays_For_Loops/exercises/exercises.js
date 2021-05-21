let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaTotal = 0;


// 6
for (let index = 0; index < numbers.length; index += 1) {
  somaTotal = numbers[index] + somaTotal;
  console.log(somaTotal);
}

let media = somaTotal / numbers.length;
console.log('Media dos numeros ' + media);

if (media > 20) {
  console.log('Media maior que 20');
} else {
  console.log('Media menor que 20');
}


for (let index = 0; index < numbers.length; index += 1) {


}


// 6
// for (let index = 0; index < numbers.length; index += 1) {
//   let impar = 0;
//   if ((numbers[index] % 2) != 0) {
//     impar = numbers[index];
//     console.log('nenhum valor impar');
//   } else {

//   }
// }



// 5.
// let maiorNum = 0;
// for (let index = 0; index < numbers.length; index += 1) {
  
//   if (numbers[index] > maiorNum) {
//     maiorNum = numbers[index];
//   } else {

//     //console.log(maiorNum);
//   }
// } 
// console.log(maiorNum);

