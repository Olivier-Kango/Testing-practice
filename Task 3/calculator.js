class Calculator {
  constructor() {
    this.result = 'Your answer is:';
  }

  add(num1, num2) {
    return `${this.result} ${num1 + num2}`;
  }

  subtract(num1, num2) {
    return `${this.result} ${num1 - num2}`;
  }

  divide(num1, num2) {
    if (num1 === 0 || num2 === 0) {
      throw new Error('Invalid number');
    }
    return `${this.result} ${num1 / num2}`;
  }

  multiply(num1, num2) {
    if (num1 === 0 || num2 === 0) {
      throw new Error('Invalid number');
    }
    return `${this.result} ${num1 * num2}`;
  }
}

const calculatorMethod = new Calculator();

module.exports = calculatorMethod;