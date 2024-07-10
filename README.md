# Metric-Imperial Converter

This project is part of the FreeCodeCamp - Quality Assurance Certification
Tasks that needed to be accomplished below:

## Instructions for Conversion Logic and Testing


1. **Complete Conversion Logic:**
   - Implement the necessary conversion logic in `/controllers/convertHandler.js`.

2. **Complete Routes:**
   - Implement the required routes in `/routes/api.js`.

3. **Environment Variables:**
   - Copy the `sample.env` file to `.env` and set the variables appropriately.

4. **Running Tests Automatically:**
   - Add `NODE_ENV=test` in your `.env` file.

5. **Running Tests Manually:**
   - To run the tests in the console, use the command:
     ```bash
     npm run test
     ```

### Unit Tests

Write the following tests in `tests/1_unit-tests.js`:

1. **Whole Number Input:**
   - `convertHandler` should correctly read a whole number input.

2. **Decimal Number Input:**
   - `convertHandler` should correctly read a decimal number input.

3. **Fractional Input:**
   - `convertHandler` should correctly read a fractional input.

4. **Fractional Input with a Decimal:**
   - `convertHandler` should correctly read a fractional input with a decimal.

5. **Double-Fraction Error:**
   - `convertHandler` should correctly return an error on a double-fraction (i.e. 3/2/3).

6. **Default Numerical Input:**
   - `convertHandler` should correctly default to a numerical input of 1 when no numerical input is provided.

7. **Valid Input Units:**
   - `convertHandler` should correctly read each valid input unit.

8. **Invalid Input Unit Error:**
   - `convertHandler` should correctly return an error for an invalid input unit.

9. **Return Unit for Valid Input:**
   - `convertHandler` should return the correct return unit for each valid input unit.

10. **Spelled-Out String Unit:**
    - `convertHandler` should correctly return the spelled-out string unit for each valid input unit.

11. **Conversion Tests:**
    - `convertHandler` should correctly convert:
      - gal to L.
      - L to gal.
      - mi to km.
      - km to mi.
      - lbs to kg.
      - kg to lbs.

### Functional Tests

Write the following tests in `tests/2_functional-tests.js`:

1. **Valid Input Conversion:**
   - Convert a valid input such as `10L`: GET request to `/api/convert`.

2. **Invalid Input Unit:**
   - Convert an invalid input such as `32g`: GET request to `/api/convert`.

3. **Invalid Number:**
   - Convert an invalid number such as `3/7.2/4kg`: GET request to `/api/convert`.

4. **Invalid Number and Unit:**
   - Convert an invalid number AND unit such as `3/7.2/4kilomegagram`: GET request to `/api/convert`.

5. **No Number Input:**
   - Convert with no number such as `kg`: GET request to `/api/convert`.

