const repeatString = function(str, num) {
    if (num < 0) {
        return 'ERROR';
    }
    let repeated = '';
    while (num > 0) {
        repeated += str;
        num--;
    }
    return repeated;
};

// Do not edit below this line
module.exports = repeatString;
