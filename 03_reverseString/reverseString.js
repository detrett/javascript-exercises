const reverseString = function(string) {
    const chars = string.split("");
    let reversedChars = [];

    for(i = 0; i < chars.length; i++) {
        reversedChars.unshift(chars[i]);
    }

    return reversedChars.join("");
};

// Do not edit below this line
module.exports = reverseString;
