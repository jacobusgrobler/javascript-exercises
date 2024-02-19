const sumAll = function(a, b) {
    sum = null;
//guard statements to ensure input data is valid
if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR"
if (a < 0 || b < 0) return "ERROR"
if (a > b) {[a, b] = [b, a]}; //this is the swapzies statement

//for loop to iterate through and += assignment operator to add iteration to sum
for (let i = a; i <= b; i++){
    sum += i;
 }
 return sum;
};

// Do not edit below this line
module.exports = sumAll;
