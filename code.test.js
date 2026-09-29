import { capitalize } from './code';

test('capitalizes the first letter of a lowercase word', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('works with single-character strings', () => {
  expect(capitalize('a')).toBe('A');
});

import { reverseString } from './code';

test('reverses a single word', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('reverses sentences with spaces and punctuation', () => {
  expect(reverseString('Hello, World!')).toBe('!dlroW ,olleH');
});

import { calculator } from './code';

test('calculator operations', () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.subtract(5, 2)).toBe(3);
  expect(calculator.multiply(3, 4)).toBe(12);
  expect(calculator.divide(10, 2)).toBe(5);
});

import { caesarCipher } from './code';

test('shifts lowercase letters correctly', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
});

test('wraps from z to a', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('preserves letter case', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('keeps punctuation and spaces unchanged', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

import { analyzeArray } from './code';

test('analyzes an array of numbers correctly', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});