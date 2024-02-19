const removeFromArray = function(array, ...args) {
  
  const newArray = [];
 
  array.forEach((item) => {
   
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  
  return newArray;
  
  
  
  
  
  // const nextArray = [];
  
  // array.forEach((item) => {
  //   if (!args.includes(item)) {
  //     nextArray.push(item)
  //   }
  //   return nextArray;
  // })
   
  
  /*
  let arrFlat = arr.flat();

  for (let i = 0; i < arrFlat.length; i++) {
    arrRemover = []
    if (i === 3) {
      arrRemover += arrFlat.push(i)
    }
    return arrRemover;
  }
*/
};

// Do not edit below this line
module.exports = removeFromArray;
