const reverseString = function(string) {
    //Their solution
    //return string.split("").reverse().join("")

    //the not good way
    let stringReversed = '';
    for (let i = string.length -1; i >= 0; i--) {
        stringReversed += string[i]
    }
    return stringReversed           
};

// Do not edit below this line
module.exports = reverseString;
