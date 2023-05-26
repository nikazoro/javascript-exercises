const convertToCelsius = function(tempInFah) {
  let tempInCel = (((tempInFah - 32) * 5)/9).toFixed(1)
  return Number(tempInCel)
};

const convertToFahrenheit = function(tempInCel) {
  let tempInFah = ((tempInCel * (9/5)) +32).toFixed(1)
  return Number(tempInFah)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
