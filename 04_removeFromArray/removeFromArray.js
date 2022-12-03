const removeFromArray = function (array, ...args) {
  for (const arg of args) {
    const index = array.indexOf(arg);
    if (index > -1) {
      // only splice array when item is found
      array.splice(index, 1); // 2nd parameter means remove one item only
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
