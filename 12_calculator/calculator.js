const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	const total = arr.reduce((total, num) => total + num, 0);
  return total;
};

const multiply = function(arr) {
	const product = arr.reduce((product, num) => product * num, 1);
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	if (n < 0) {
    return "ERROR";
  }
  else if (n === 0) {
    return 1;
  }
  else {
    let fact = 1;
    while (n >= 1) {
      fact *= n;
      n--;
    }
    return fact;
  }
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
