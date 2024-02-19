const convertToCelsius = function (fahrenheit) {
  return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};



// const convertToCelsius = function(temp) {
//   const tempCel = ((temp - 32) * 5 / 9);
//   const roundTempCel = tempCel.toFixed(1);
//   const toIntCen = parseFloat(roundTempCel);
//   return toIntCen;
// };

// const convertToFahrenheit = function(temp) {
//   const tempFar = ((temp * 9/5) +32);
//   const roundTempFar = tempFar.toFixed(1);
//   const toIntFah = parseFloat(roundTempFar);
//   return toIntFah;
// };

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
