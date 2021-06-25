const numbers = [19, 21, 30, 3, 45, 22, 15];


const findDivisibleBy3And5 = () => {return numbers.find((number) => number % 3 === 0 || number % 5 === 0);}

console.log(findDivisibleBy3And5())


const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((name) => name.length === 5);
}

console.log(findNameWithFiveLetters());