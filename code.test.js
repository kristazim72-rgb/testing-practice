import { capitalize } from './code';

test('capitalizes the first letter of a lowercase word', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('works with single-character strings', () => {
  expect(capitalize('a')).toBe('A');
});