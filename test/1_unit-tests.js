const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');




let convertHandler = new ConvertHandler();




suite('Unit Tests', function () {
test('whole number input', function (done) {
  let input = '32L';
  assert.equal(convertHandler.getNum(input), 32);
  done();
});




test('Decimal Input', function (done) {
  let input = '32.2L';
  assert.equal(convertHandler.getNum(input), 32.2);
  done();
});




test('Fractional Input', function (done) {
  let input = '1/32L';
  assert.equal(convertHandler.getNum(input), 1 / 32);
  done();
});




test('Fractional Input w/ Decimal', function (done) {
  let input = '1.2/32L';
  assert.equal(convertHandler.getNum(input), 1.2 / 32);
  done();
});




test('invalid Input (double fraction)', function (done) {
  let input = '1/2/32L';
  assert.equal(convertHandler.getNum(input), undefined);
  done();
});




test('No Numerical Input', function (done) {
  let input = 'L';
  assert.equal(convertHandler.getNum(input), 1);
  done();
});
});




suite('Function convertHandler.getUnit(input)', function () {
test('For Each Valid Unit Inputs', function (done) {
  let input = ['gal', 'l', 'Mi', 'Km', 'lbs', 'Kg', 'Gal', 'L', 'MI', 'KM', 'LBS', ];
  let output = ['gal', 'L', 'mi', 'km', 'lbs', 'kg', 'gal', 'L', 'mi', 'km', 'lbs',];




  input.forEach(function (ele, index) {
    assert.equal(convertHandler.getUnit(ele), output[index]);
  });




  done();
});




test('Unknown Unit Input', function (done) {
  assert.equal(convertHandler.getUnit('34kilograms'), undefined);
  done();
});
});




suite('Function convertHandler.getReturnUnit(initUnit)', function () {
test('For Each Valid Unit Inputs', function (done) {
  let input = ['gal', 'l', 'mi', 'Km', 'lbs', 'Kg'];
  let expect = ['L', 'gal', 'km', 'mi', 'kg', 'lbs'];




  input.forEach(function (ele, i) {
    assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
  });




  done();
});
});




suite('Function convertHandler.spellOutUnit(Unit)', function () {
test('For Each Valid Unit Inputs', function (done) {
  let input = ['gal', 'l', 'mi', 'Km', 'lbs', 'Kg'];
  let expect = ['gallons', 'liters', 'miles', 'kilometers', 'pounds', 'kilograms'];




  input.forEach(function (ele, i) {
    assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
  });




  done();
});
});




suite('Function convertHandler.convert(num, unit)', function () {
test('gal to L', function (done) {
  let input = [5, 'gal'];
  let expected = 18.9271;
  assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
  done();
});




test('L to Gal', function (done) {
  let input = [5, 'L'];
  let expected = 1.32086;
  assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
  done();
});




test('Mi to Km', function (done) {
  let input = [5, 'Mi'];
  let expected = 8.0467;
  assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
  done();
});




test('Km to Mi', function (done) {
  let input = [5, 'km'];
  let expected = 3.10686;
  assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
  done();
});




test('lbs to kg', function (done) {
  let input = [5, 'lbs'];
  let expected = 2.26796;
  assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
  done();
});




test('kg to lbs', function (done) {
  let input = [5, 'kg'];
  let expected = 11.02312;
  assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
  done();
});
});


















