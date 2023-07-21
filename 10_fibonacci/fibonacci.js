const fibonacci = function(fibInd) {
    if(fibInd < 1) return("OOPS");
    let fibNum = 1
    let prevFib = 0
    for (let i = 0; i < fibInd-1; i++){
        const newFib = fibNum + prevFib
        prevFib = fibNum
        fibNum = newFib;
    }
    return fibNum

};

// Do not edit below this line
module.exports = fibonacci;
