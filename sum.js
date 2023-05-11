function sum(a, b) {
  return a + b;
}

const capitalizeWord = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const reverseString = (string) => {
  return string.split("").reverse().join("");
};

const calculator = (expression) => {
  const [a, operator, b] = expression.split(" ");
  switch (operator) {
    case "+":
      return +a + +b;
    case "-":
      return +a - +b;
    case "/":
      return +a / +b;
    case "*":
      return +a * +b;
    default:
      return "nothing inputted";
  }
};

const caesarCipher = (str, shift) => {
  return str.replace(/[a-z]/gi, (char) => {
    const base = char <= "Z" ? "A".charCodeAt(0) : "a".charCodeAt(0);
    return String.fromCharCode(
      ((char.charCodeAt(0) - base + shift) % 26) + base
    );
  });
};

const analyzeArray = (arr) => {
  const sum = arr.reduce((a, b) => a + b, 0);
  const average = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return {
    average,
    min,
    max,
    length,
  };
};

module.exports = {
  sum,
  capitalizeWord,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray
};
