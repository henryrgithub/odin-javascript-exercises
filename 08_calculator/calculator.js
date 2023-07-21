const add = function(in1, in2) {
  return in1+in2
};

const subtract = function(in1, in2) {
  return in1-in2
};

const sum = function(ins) {
  return ins.reduce((summer,curr) => summer + curr, 0) 
};

const multiply = function(...ins) {
  return ins.reduce((prod,curr) => prod*curr,1)

};

const power = function(in1, in2) {
  return in1**in2
	
};

const factorial = function(numIn) {
  if(numIn < 2) return 1;
  return numIn*factorial(numIn - 1);
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
