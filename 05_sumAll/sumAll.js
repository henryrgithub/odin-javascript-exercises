const sumAll = function(inOne, inTwo) {
    if ((typeof(inOne)!=='number')||(typeof(inTwo)!=='number')) return 'ERROR';
    let small = Math.min(inOne,inTwo);
    if (small < 0) return('ERROR')
    let large = Math.max(inOne,inTwo);
    let retnum = 0;
    for(let i = small; i<= large; i++) retnum += i;
    return retnum;
};

// Do not edit below this line
module.exports = sumAll;
