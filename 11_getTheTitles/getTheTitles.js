const getTheTitles = function(books) {
    const bookArr = [];
    for (let i = 0; i < books.length ; i++) {
        bookArr.push(books[i].title);
    }
    return bookArr
};

// Do not edit below this line
module.exports = getTheTitles;
