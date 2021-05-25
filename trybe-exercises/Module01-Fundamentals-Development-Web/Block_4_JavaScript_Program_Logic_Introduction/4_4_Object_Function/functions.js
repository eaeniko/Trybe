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