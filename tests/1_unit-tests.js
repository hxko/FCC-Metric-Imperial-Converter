const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {

  test('convertHandler should correctly read whole numbers input', function (done) {
    assert.equal(convertHandler.getNum('5gal'), 5);
    done();
  });
});