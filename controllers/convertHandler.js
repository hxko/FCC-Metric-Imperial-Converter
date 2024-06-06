function ConvertHandler() {

  this.getNum = function (input) {
    // Regular expression to match numbers, fractions, and decimals
    let result = input.match(/[.\d\/]+/g) || ["1"]; // Default to "1" if no number found
    result = result[0];

    // Handle fractions
    if (result.includes('/')) {
      let numbers = result.split('/');
      if (numbers.length != 2) {
        return "invalid number"; // Invalid fraction
      }
      result = parseFloat(numbers[0]) / parseFloat(numbers[1]);
    } else {
      result = parseFloat(result); // Convert to float
    }

    if (isNaN(result)) {
      return "invalid number";
    }

    return result;
  };

  this.getUnit = function (input) {
    // Regular expression to match alphabetic characters (units)
    let result = input.match(/[a-zA-Z]+/g);

    if (!result) {
      return "invalid unit";
    }

    result = result[0].toLowerCase();

    const validUnits = ['gal', 'l', 'lbs', 'kg', 'mi', 'km'];
    if (!validUnits.includes(result)) {
      return "invalid unit";
    }

    return result;
  };

  this.getReturnUnit = function (initUnit) {
    const unitMap = {
      'gal': 'L',
      'l': 'gal',
      'lbs': 'kg',
      'kg': 'lbs',
      'mi': 'km',
      'km': 'mi'
    };
    return unitMap[initUnit.toLowerCase()];
  };

  this.spellOutUnit = function (unit) {
    if (!unit) return "invalid unit"; // Check if unit is undefined

    const unitSpellOut = {
      'gal': 'gallons',
      'l': 'liters',
      'lbs': 'pounds',
      'kg': 'kilograms',
      'mi': 'miles',
      'km': 'kilometers'
    };
    return unitSpellOut[unit.toLowerCase()];
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    // conversion switch
    switch (initUnit.toLowerCase()) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      default:
        result = undefined;
    }

    return result.toFixed(5);
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    const spelledOutInitUnit = this.spellOutUnit(initUnit);
    const spelledOutReturnUnit = this.spellOutUnit(returnUnit);
    result = `${initNum} ${spelledOutInitUnit} converts to ${returnNum} ${spelledOutReturnUnit}`;

    return result;
  };

}

module.exports = ConvertHandler;
