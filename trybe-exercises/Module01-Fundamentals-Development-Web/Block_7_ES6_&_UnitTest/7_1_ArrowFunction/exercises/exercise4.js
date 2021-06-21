const longestWord = (word) => {
  let wordSplit = word.split(' ');
  let biggestWord = '';
  for (const key in wordSplit) {
    if (wordSplit[key].length > biggestWord.length) {
      biggestWord = wordSplit[key];
    }
  }
  console.log(`A maior palavra é '${biggestWord}'`)
}
longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'
