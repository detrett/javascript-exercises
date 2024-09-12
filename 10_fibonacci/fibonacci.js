const fibonacci = function(index) {
    if (index < 0) return "OOPS";
    if (index == 1 || index == 2) return 1;

    let firstPreceding = 1;
    let secondPreceding = 1;
    let total = 0;

    for(let i = 2; i < index; i++) {
        total = firstPreceding + secondPreceding;
        firstPreceding = secondPreceding;
        secondPreceding = total;
    }
    return total;
};

// Do not edit below this line
module.exports = fibonacci;
