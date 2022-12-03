const palindromes = function (str) {
    cleanedstr = str.toLowerCase().replaceAll(/[^A-Za-z0-9]/g, "");
    let i = 0;
    let j = cleanedstr.length - 1;
    while (i <= j) {
        if (cleanedstr.charAt(i) != cleanedstr.charAt(j)) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
