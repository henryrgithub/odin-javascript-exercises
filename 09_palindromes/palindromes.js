const palindromes = function (palIn) {
    const regex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
    const regex2 = /\s/g;
    const palSplit = palIn.replace(regex, '').replace(regex2, '').toLowerCase().split('');
    console.log(palSplit);
    let startInd = 0;
    let endInd = palSplit.length-1;
    while(startInd<endInd){
        if(palSplit[startInd] !== palSplit[endInd]) return false;
        startInd++;
        endInd--;
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;
