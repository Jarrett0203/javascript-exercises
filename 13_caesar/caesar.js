const caesar = function (str, shift) {
  // split into char array
  charArray = str.split("");
  // if shift is greater than 26 or smaller than -26
  while (shift < -26) {
    shift += 26;
  }
  while (shift > 26) {
    shift -= 26;
  }
  // only filter by alphabet characters
  for (let i = 0; i < charArray.length; i++) {
    temp = charArray[i].charCodeAt(0);
    if ((temp >= 65 && temp <= 90) || (temp >= 97 && temp <= 122)) {
        new_char = temp + shift;
        // if shift causes character to be out of range, +- to compensate
        if (new_char < 65 || (new_char < 97 && temp >= 97)) {
            new_char += 26;
        }
        if (new_char > 122 || (new_char > 90 && temp <= 90)) {
            new_char -= 26;
        }
        charArray[i] = String.fromCharCode(new_char);
    }
  }
  return charArray.join('');
};

// Do not edit below this line
module.exports = caesar;
