const findTheOldest = function(arr) {
    const oldest = arr.reduce((accumulator, person) => {
        const thisYear = new Date().getFullYear();
        const personYearOfDeath = person.yearOfDeath || thisYear;
        const accumulatorYearOfDeath = accumulator.yearOfDeath || thisYear;

        const personAge = personYearOfDeath - person.yearOfBirth;
        const accumulatorAge = accumulatorYearOfDeath - accumulator.yearOfBirth;
        return personAge > accumulatorAge ? person : accumulator;
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
