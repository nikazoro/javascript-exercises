const add = function(num1 , num2) {
	return num1 + num2
};

const subtract = function(num1 , num2) {
	return num1-num2
};

const sum = function(arr) {
  let sum = 0;

  arr.forEach((item) => {
    sum += item;
  })

  return sum;
};

const multiply = function(arr) {
    if (arr === []) return 0;
    let mul = 1;

    arr.forEach((item) => {
    mul *= item;
    })

    return mul;
};

const power = function(base , power) {
    return base ** power
};

const factorial = function(num) {
	if (num === 0) return 1;
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
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
