const findTheOldest = function(peeps) {
    const currYear = new Date().getFullYear();
    const oldest = peeps.reduce((oldie,curr) => {
        if(!Object.keys(oldie).length) {
            const test = curr;
            return test;
        }
        const currDeath = curr.yearOfDeath || currYear;
        const currAge = currDeath - curr.yearOfBirth;
        const prevDeath = oldie.yearOfDeath || currYear;
        const prevAge = prevDeath - oldie.yearOfBirth;
        if (currAge > prevAge) {
            const test = curr;
            return test;
        } else {
            const test = oldie;
            return test;
        }
    },
    {})
    console.log(oldest.name)
    return oldest


};

// Do not edit below this line
module.exports = findTheOldest;
