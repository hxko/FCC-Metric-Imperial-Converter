'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  // constructor function
  let convertHandler = new ConvertHandler();

  app.route("/api/convert")
    .get((req, res) => {

      // get input from query ex. /api/convert?input=5gal
      let input = req.query.input; // example: 5gal

      let initNum = convertHandler.getNum(input);
      let initUnit = convertHandler.getUnit(input);
      let returnNum = convertHandler.convert(initNum, initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

      let responseObject = {
        initNum: initNum,
        initUnit: initUnit,
        returnNum: returnNum,
        returnUnit: returnUnit,
        string: toString
      };

      res.json(responseObject);
    });
};
