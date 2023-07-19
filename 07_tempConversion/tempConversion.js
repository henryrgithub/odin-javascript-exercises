const convertToCelsius = function(farenIn) {
  return Math.round((farenIn-32)*50/9)/10
};

const convertToFahrenheit = function(celcIn) {
  return Math.round((celcIn*9/5+32)*10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
