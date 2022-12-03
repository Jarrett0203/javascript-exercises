const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

const multiply = function(arr) {
  if (arr.length == 0) {
    return 0;
  }
  let total = 1;
  for (let i = 0; i < arr.length; i++) {
    total *= arr[i];
  }
  return total;
};

const power = function(num, exp) {
	return Math.pow(num, exp);
};

const factorial = function(num) {
	let i = 1;
  let total = 1;
  while (i <= num) {
    total *= i;
    i++;
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
