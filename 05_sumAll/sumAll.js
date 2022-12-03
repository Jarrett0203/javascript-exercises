const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
    let sum = num1 + num2;
    smaller = num1;
    larger = num2;
    if (num1 > num2) {
        smaller = num2;
        larger = num1;
    }
    for (let i = smaller + 1; i < larger; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
