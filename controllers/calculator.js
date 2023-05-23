class Calculator {
  constructor() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  add(x, y) {
    this.result = x + y;
    return this.result;
  }

  subtract(x, y) {
    this.result = x - y;
    return this.result;
  }

  multiply(x, y) {
    this.result = x * y;
    return this.result;
  }

  divide(x, y) {
    this.result = x / y;
    return this.result;
  }

  power(x, y) {
    this.result = x ** y;
    return this.result;
  }
}

module.exports = Calculator;
