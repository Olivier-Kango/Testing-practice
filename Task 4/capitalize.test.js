const capitalize = require('./capitalize.js');

test('Capitalize string', () => {
  expect(capitalize('man')).toBe('Man');
});

test('String should be a word', () => {
  expect(() => {
    capitalize(6);
  }).toThrow('Input a string');
});