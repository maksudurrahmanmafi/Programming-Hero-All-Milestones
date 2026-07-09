const arr = [1,2,3,4,3,23,232,22,3]
console.log(arr);


//spreed

console.log(...arr);

//max element

console.log(Math.max(...arr));

//min element

console.log(Math.min(...arr));


/* copy array from another array. 
   If we use this we can push element but
  element will be push every single array  
  
*/
const a = [1, 2, 3, 34, 32, 23, 3]
const b = a

b.push(34)
console.log(a);

/* 
    Using spreed operator ... the element will push spicific array 
    and also we can use it in any position 
 */

    const a2 = [1, 2, 3, 34, 32, 23, 3]
const b2 = [...a, 2,344,455,66] //

b2.push(5)
console.log(a2);
console.log(b2);


// we can also use object

const obj = {
    name: "Mafi",
    email: "a@.com"
}
const obj2 = {
    designation: "Student & Developer",
    ...obj
}
console.log(obj2);

