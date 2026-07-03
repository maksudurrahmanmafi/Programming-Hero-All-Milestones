const arr = [ 10,12,4,2,12,343,323,342,13];
const target = 12
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
   
    
}
let count = arr.filter(num => num === target).length;
console.log(`count is ${count}`);
