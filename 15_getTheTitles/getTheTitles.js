const getTheTitles = function(books) {
    // MAP an array of books to array of book's title
    // STORE the array of titles into a variable
    const titles = books.map((book) => book.title);
    // RETURN the array of titles
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
