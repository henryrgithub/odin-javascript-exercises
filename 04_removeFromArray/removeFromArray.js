const removeFromArray = function(arrIn, ...indices) {
    let retArr = arrIn;
    for(const index of indices){
        retArr = retArr.filter(item => item !== index);
    }
    return retArr;
};

// Do not edit below this line
module.exports = removeFromArray;
