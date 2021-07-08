const randomNumberToSquare = () => Math.round(((Math.random() * 50)**2));
const populateArrayWithRandomNumbers = () => {
  const arrayRandomNumbers = [];
  for (let index = 0; index < 10; index += 1) {
    arrayRandomNumbers.push(randomNumberToSquare());
  }
  return arrayRandomNumbers;
}
const totalRandomNumbers = () => populateArrayWithRandomNumbers().reduce((acc, currValue) => acc += currValue);

foreach()

const promise = new Promise ((resolve, reject) => {
  const newNumber = totalRandomNumbers();
  if (newNumber > 8000) {
    return reject(newNumber);
  } 
  resolve(newNumber);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg))
.catch(number => console.log(`Promise rejeitada ${number} é mais de 8MILLLLLL`));

console.log(promise);