const reverseString = function(str) {
    reversedString = "";
    charArray = str.split("");
    for (let i = charArray.length - 1; i >= 0; i--) {
        reversedString += charArray[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
