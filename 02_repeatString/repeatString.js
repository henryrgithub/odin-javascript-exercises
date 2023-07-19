const repeatString = function(strIn,numIn) {
    let retStr = '';
    if(numIn===0);
    else if (numIn>0){
        for(let i = 0; i < numIn; i++) retStr = retStr.concat(strIn);
    }
    else retStr = 'ERROR';
    return retStr
};

// Do not edit below this line
module.exports = repeatString;
