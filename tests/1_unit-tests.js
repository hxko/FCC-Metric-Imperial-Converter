const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {
  // #1
  test('convertHandler should correctly read whole numbers input', function (done) {
    assert.equal(convertHandler.getNum('5gal'), 5);
    done();
  });
  // #2
  test('convertHandler should correctly read decimal numbers input', function (done) {
    assert.equal(convertHandler.getNum('5.2gal'), 5.2);
    done();
  });

  // #3
  test('convertHandler should correctly read fractional input', function (done) {
    assert.equal(convertHandler.getNum('5/2gal'), 2.5);
    done();
  });

  // #4
  test('convertHandler should correctly read fractional input with a decimal', function (done) {
    assert.equal(convertHandler.getNum('5.2/2gal'), 2.6);
    done();
  });

  // #5
  test('convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3)', function (done) {
    assert.equal(convertHandler.getNum('3/2/3gal'), 'invalid number');
    done();
  });

  // #6
  test('convertHandler should correctly default to a numerical input when no number is provided', function (done) {
    assert.equal(convertHandler.getNum('gal'), 1);
    done();
  });

  // #7
  test("convertHandler should correctly read EACH valid input unit", () => {
    const testCases = [
      { input: "2gal", expected: "gal", message: "correctly read gal" },
      { input: "2L", expected: "L", message: "correctly read L" },
      { input: "2mi", expected: "mi", message: "correctly read mi" },
      { input: "2km", expected: "km", message: "correctly read km" },
      { input: "2lbs", expected: "lbs", message: "correctly read lbs" },
      { input: "2kg", expected: "kg", message: "correctly read kg" }
    ];

    testCases.forEach(({ input, expected, message }) => {
      assert.strictEqual(
        convertHandler.getUnit(input),
        expected,
        message
      );
    });

  });

  // #8
  test("convertHandler should correctly return an error for an invalid input unit", (done) => {
    assert.equal(convertHandler.getUnit('2invalidUnit'), 'invalid unit');
    done();
  });

  // #9
  test("convertHandler should return the correct return unit for each valid input unit", () => {
    const testCases = [
      { input: "gal", expected: "L", message: "correctly convert gal to L" },
      { input: "L", expected: "gal", message: "correctly convert L to gal" },
      { input: "mi", expected: "km", message: "correctly convert mi to km" },
      { input: "km", expected: "mi", message: "correctly convert km to mi" },
      { input: "lbs", expected: "kg", message: "correctly convert lbs to kg" },
      { input: "kg", expected: "lbs", message: "correctly convert kg to lbs" }
    ];

    testCases.forEach(({ input, expected, message }) => {
      assert.strictEqual(
        convertHandler.getReturnUnit(input),
        expected,
        message
      );
    });
  });

  // #10
  test("convertHandler should correctly return the spelled-out string unit for each valid input unit", () => {
    const testCases = [
      { input: "gal", expected: "gallons", message: "correctly convert gal to gallons" },
      { input: "L", expected: "liters", message: "correctly convert L to liter" },
      { input: "mi", expected: "miles", message: "correctly convert mi to mile" },
      { input: "km", expected: "kilometers", message: "correctly convert km to kilometer" },
      { input: "lbs", expected: "pounds", message: "correctly convert lbs to pound" },
      { input: "kg", expected: "kilograms", message: "correctly convert kg to kilogram" }
    ];

    testCases.forEach(({ input, expected, message }) => {
      assert.strictEqual(
        convertHandler.spellOutUnit(input),
        expected,
        message
      );
    });
  });

  // #11
  test("convertHandler should correctly convert gal to L", () => {
    assert.equal(convertHandler.convert(1, 'gal'), 3.78541);
  });

  // #12
  test("convertHandler should correctly convert L to gal", () => {
    assert.equal(convertHandler.convert(5, 'L'), 1.32086);
  });

  // #13
  test("convertHandler should correctly convert mi to km", () => {
    assert.equal(convertHandler.convert(5, 'mi'), 8.0467);
  });

  // #14
  test("convertHandler should correctly convert km to mi", () => {
    assert.equal(convertHandler.convert(5, 'km'), 3.10686);
  });

  // #15  
  test("convertHandler should correctly convert lbs to kg", () => {
    assert.equal(convertHandler.convert(5, 'lbs'), 2.26796);
  });

  // #16
  test("convertHandler should correctly convert kg to lbs", () => {
    assert.equal(convertHandler.convert(5, 'kg'), 11.02312);
  });

});