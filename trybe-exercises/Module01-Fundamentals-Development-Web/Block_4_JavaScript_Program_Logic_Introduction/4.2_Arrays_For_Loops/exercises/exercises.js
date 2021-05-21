let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaTotal = 0;
// 2.
for (let index = 0; index < numbers.length; index += 1) {
  //let numbersEach = numbers[index];
  somaTotal = numbers[index] + somaTotal;
  console.log(somaTotal);
}