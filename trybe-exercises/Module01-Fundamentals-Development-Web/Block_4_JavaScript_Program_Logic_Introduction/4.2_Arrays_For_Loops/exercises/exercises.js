let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaTotal = 0;


// 4.
for (let index = 0; index < numbers.length; index += 1) {
  //let numbersEach = numbers[index];
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