/* array.reduce((accumulator, currentValue) => {
  return updatedAccumulator;
}, initialValue); */
//Reduce convert all array into one element like total sum of the array 
const arr = ['a','b','c','d']
const result = arr.reduce((acc,cur) => {
    return acc + " " + cur
    
})
console.log(result);
