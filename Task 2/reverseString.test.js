const reverseaString = require('./reverseString.js');

test('olivier should be reverse as reivilo', () => {
  expect(reverseaString('olivier')).toBe('reivilo');
});
