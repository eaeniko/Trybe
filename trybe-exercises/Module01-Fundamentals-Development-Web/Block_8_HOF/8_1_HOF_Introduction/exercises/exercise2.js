const generateRandomNumber = () => Math.round(Math.random() * 5);
const checkBetNumber = (number) => {
  let result;
  const randomNumber = generateRandomNumber();
  if (number === randomNumber) {
    result = 'You win!';
  } else {
    result = `Tente novamente =/`;
  }
  return result;
}
const newRaffle = (number) => {
  const getBetNumber = checkBetNumber(number);
  return getBetNumber;
}


console.log(newRaffle(2));