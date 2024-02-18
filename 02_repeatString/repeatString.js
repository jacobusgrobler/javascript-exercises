const repeatString = function(string, num) {
    // if (num <= -1) {
    //     return "ERROR"
    // }else if (num < 1) {
    //     return ""
    // }
    //  return string.repeat(num);

    //Their solution
     if (num < 0) return "ERROR";
  let stringRepeat = "";
  for (let i = 0; i < num; i++) {
    stringRepeat += string;
  }
  return stringRepeat;
};

// Do not edit below this line
module.exports = repeatString;
