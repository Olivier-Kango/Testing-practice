const stringLength  = require("./stringlength.js")

test('Olivier is equal to 7', () => {
  expect(stringLength('Olivier')).toBe(7);
});

test('O is equal to 1', () => {
  expect(stringLength('O')).toBe(1);
});
