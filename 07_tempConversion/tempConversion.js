const convertToCelsius = function(ºF) {
  return Math.round(((ºF -32) * 5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(ºC) {
  return Math.round(((ºC * 9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
