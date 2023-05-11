const {
  sum,
  capitalizeWord,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray
} = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("capitalize first letter of word", () => {
  expect(capitalizeWord("cat")).toBe("Cat");
});

test("reverse a string", () => {
  expect(reverseString("this is a string")).toBe("gnirts a si siht");
});

test("calculate addition", () => {
  expect(calculator("2 + 2")).toBe(4);
});

test("calculate subtraction", () => {
  expect(calculator("2 - 2")).toBe(0);
});

test("calculate division", () => {
  expect(calculator("2 / 2")).toBe(1);
});

test("calculate multiplication", () => {
  expect(calculator("2 * 2")).toBe(4);
});

test("caesarCipher shift factor", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("return array of nums as avg, min, max, and length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
