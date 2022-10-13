const toUpperCase  = require("./uppercase")
describe(
  'test all scenarii of uppercase for a string', () => {
    test('to uppercase for a string', () => {
      expect(toUpperCase('chat')).toBe('CHAT')
    })
    test('to uppercase for a non-string', () => {
      expect(toUpperCase(12)).toBe(12)
    })
  }
)