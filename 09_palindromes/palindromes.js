const palindromes = function (str) {
    const strLength = str.replace(/[^\w]/gi, '').length;
    const isEven = strLength % 2 === 0 ? true : false;
    const middle = isEven ? strLength / 2 : Math.ceil(strLength / 2);

    let firstHalf = "";
    let secondHalf = "";

    if(isEven) {
        firstHalf = str.toLowerCase().replace(/[^\w]/gi, '').substr(0,middle);
        secondHalf = str.toLowerCase().replace(/[^\w]/gi, '').substr(middle, strLength).split('').reverse().join('');
    } else {
        firstHalf = str.toLowerCase().replace(/[^\w]/gi, '').substr(0,middle);
        secondHalf = str.toLowerCase().replace(/[^\w]/gi, '').substr(middle-1, strLength).split('').reverse().join('');
    }

    return firstHalf === secondHalf ? true : false;
    
};


// Do not edit below this line
module.exports = palindromes;
