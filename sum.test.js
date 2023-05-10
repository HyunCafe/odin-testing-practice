const {sum, capitalizeWord, reverseString, calculator, caesarCipher} = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('capitalize first letter of word', () => {
    expect(capitalizeWord('cat')).toBe('Cat');
})

test('reverse a string', () => {
    expect(reverseString('this is a string')).toBe('gnirts a si siht');
})

test('calculate add, subtract, divide, multiply', () => {
    expect(calculator("2 + 2")).toBe(4);
    expect(calculator("2 - 2")).toBe(0);
    expect(calculator("2 / 2")).toBe(1);
    expect(calculator("2 * 2")).toBe(4);
  });
  
  test('caesarCipher shift factor', () => {
    expect(caesarCipher("Hello, World!", 3)).toBe('Khoor, Zruog!');
  });