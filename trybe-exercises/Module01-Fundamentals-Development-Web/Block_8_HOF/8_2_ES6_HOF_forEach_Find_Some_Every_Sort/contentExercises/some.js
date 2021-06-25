const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((arrName) => arrName === name)
}

console.log(hasName(names, 'Ana'))