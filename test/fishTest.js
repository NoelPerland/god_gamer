const assert = require('assert');

const Confirm = require('../controllers/confirm');

describe('Confirm', function () {
  beforeEach(function () {
    this.give = new Confirm();
  });
  describe('give()', function () {
    it('should return Tuna is a fish the first time Confirm is rendered', function () {
      assert.equal(this.give.give(), 'Tuna is a fish');
    });
  });
  describe('give() using parameter', function () {
    it('should return Tuna is a fish  when Tuna is entered ', function () {
      assert.equal(this.give.give('Tuna'), 'Tuna is a fish');
    });
  });
});
