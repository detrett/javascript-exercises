const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, currentItem) => {
    return add(total, currentItem);
  }, 0);
};

const multiply = function(array) {
  return array.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
};

const power = function(base, exponential) {
	return Math.pow(base, exponential);
};

const factorial = function(a) {
  let total = 1;
	for(let i = 1; i <= a; i++) {
    total *= i;
  }
  return total;
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
