const getTheTitles = function(books) {
    const retArr =  books.reduce(
        (accum,curr) => {
            accum.push(curr.title);
            return accum;
        },
        []
    );
    return retArr;

};

// Do not edit below this line
module.exports = getTheTitles;
