export function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
  return str.split('').reverse().join('');
}

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

function shiftChar(char, shift) {
  const code = char.charCodeAt(0);

  // Uppercase letters (ASCII 65 - 90)
  if (code >= 65 && code <= 90) {
    return String.fromCharCode(((code - 65 + shift) % 26) + 65);
  }
  // Lowercase letters (ASCII 97 - 122)
  if (code >= 97 && code <= 122) {
    return String.fromCharCode(((code - 97 + shift) % 26) + 97);
  }

  return char;
}

export function caesarCipher(str, shift) {
  return str
    .split('')
    .map((char) => shiftChar(char, shift))
    .join('');
}

export function analyzeArray(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return {
    average: sum / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}