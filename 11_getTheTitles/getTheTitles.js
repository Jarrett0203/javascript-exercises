const getTheTitles = function(arr) {
    books = [];
    for (let i = 0; i < arr.length; i++) {
        books.push(arr[i]["title"]);
    }
    return books;
};

// Do not edit below this line
module.exports = getTheTitles;
