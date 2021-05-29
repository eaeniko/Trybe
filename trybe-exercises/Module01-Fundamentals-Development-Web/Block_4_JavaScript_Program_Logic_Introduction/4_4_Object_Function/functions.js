function isPalindrome (string) {
  let lastString = string.length -1;
  let inverseString = '';

  for (let index = lastString; index >= 0; index -= 1) {
    inverseString += string[index];
  }
  return string === inverseString;
}

let result = isPalindrome('ana');

console.log(result);


function integer (arrayNumbers) {
  higherIndex = 0;


  for (let key in arrayNumbers) {
    if (arrayNumbers[key] > higherIndex) {
      higherIndex = arrayNumbers[key];
    }
  }

  return higherIndex;
}


console.log(integer([2, 3, 6, 7, 10, 1]));