const assert = require('assert');
const Calculator = require('../controllers/calculator');

describe('Calculator', function () {
  let calculator;
  beforeEach(function () {
    calculator = new Calculator();
  });
  it('should add two numbers correctly', function () {
    const result = calculator.add(1, 1);
    assert.strictEqual(result, 2);
  });
});
