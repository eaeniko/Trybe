function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

describe('Ex1', () => {
  test('sum numbers', () => {
    expect(sum(4,5)).toBe(9);
  })
})

describe('Ex2', () => {
  test('0 with 0', () => {
    expect(sum(0,0)).toBe(0);
  })
})

describe('Ex3', () => {
  test('throw error ', () => {
    expect(sum(4, '5')).toThrow();
  })
})