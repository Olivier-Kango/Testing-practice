const calculatorMethod = require('./calculator.js');

describe('The add method:', () => {
  test('1 + 1 shoud be 2', () => {
    // Arrange
    const a = 1;
    const b = 1;
    const output = 'Your answer is: 2';

    // Act
    const result = calculatorMethod.add(a, b);

    // Asserts
    expect(result).toEqual(output);
  });

  test('Adding 10 + 10 should equal 20', () => {
    // Arrange
    const a = 10;
    const b = 10;
    const output = 'Your answer is: 20';

    // Act
    const result = calculatorMethod.add(a, b);

    // Asserts
    expect(result).toEqual(output);
  });

  test('Adding 13 + 11 should equal 24', () => {
    // Arrange
    const a = 13;
    const b = 11;
    const output = 'Your answer is: 24';

    // Act
    const result = calculatorMethod.add(a, b);

    // Asserts
    expect(result).toEqual(output);
  });
});

describe('The subtract method:', () => {
  test('Subtracting 1 - 1 should equal 0', () => {
    // Arrange
    const a = 1;
    const b = 1;
    const outputSub = 'Your answer is: 0';

    // Act
    const result = calculatorMethod.subtract(a, b);

    // Asserts
    expect(result).toEqual(outputSub);
  });

  test('Subtracting 5 - 10 should equal -5', () => {
    // Arrange
    const a = 5;
    const b = 10;
    const outputSub = 'Your answer is: -5';

    // Act
    const result = calculatorMethod.subtract(a, b);

    // Asserts
    expect(result).toEqual(outputSub);
  });

  test('Subtracting 13 - 11 should equal 2', () => {
    // Arrange
    const a = 13;
    const b = 11;
    const output = 'Your answer is: 2';

    // Act
    const result = calculatorMethod.subtract(a, b);

    // Asserts
    expect(result).toEqual(output);
  });
});

describe('The divide method:', () => {
  test('Dividing 1 / 1 should equal 1', () => {
    // Arrange
    const a = 1;
    const b = 1;
    const output = 'Your answer is: 1';

    // Act
    const result = calculatorMethod.divide(a, b);

    // Asserts
    expect(result).toEqual(output);
  });

  test('Dividing 3 / 2 should equal 1.5', () => {
    // Arrange
    const a = 3;
    const b = 2;
    const output = 'Your answer is: 1.5';

    // Act
    const result = calculatorMethod.divide(a, b);

    // Asserts
    expect(result).toEqual(output);
  });

  test('Dividing 13 / 0 should produce Invalid Division! Error', () => {
    // Arrange
    const a = 15;
    const b = 3;
    const output = 'Your answer is: 5';

    // Act
    const result = calculatorMethod.divide(a, b);

    // Asserts
    expect(result).toEqual(output);
  });
});

describe('The multiply method:', () => {
  test('multiplying 1 * 1 should equal 1', () => {
    // Arrange
    const a = 1;
    const b = 1;
    const output = 'Your answer is: 1';

    // Act
    const result = calculatorMethod.multiply(a, b);

    // Asserts
    expect(result).toEqual(output);
  });

  test('multiplying 10 * 10 should equal 100', () => {
    // Arrange
    const a = 10;
    const b = 10;
    const output = 'Your answer is: 100';

    // Act
    const result = calculatorMethod.multiply(a, b);

    // Asserts
    expect(result).toEqual(output);
  });

  test('multiplying 4 * 2 should equal 8', () => {
    // Arrange
    const a = 2;
    const b = 4;
    const output = 'Your answer is: 8';

    // Act
    const result = calculatorMethod.multiply(a, b);

    // Asserts
    expect(result).toEqual(output);
  });
});