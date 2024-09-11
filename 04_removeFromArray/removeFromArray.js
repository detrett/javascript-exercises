const removeFromArray = function(array, ...args) {
    for (const arg of args) {
        console.log(arg);
        array = array.filter(val => val !== arg);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
