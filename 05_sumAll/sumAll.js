const sumAll = function(val1, val2) {
    if(!Number.isInteger(val1) || !Number.isInteger(val2)) return 'ERROR';
    if(val1 < 0 || val2 < 0) return 'ERROR';

    const minValue = Math.min(val1, val2);
    const maxValue = Math.max(val1, val2);
    let finalSum = 0;
    for(i = minValue; i <= maxValue; i++) {
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
