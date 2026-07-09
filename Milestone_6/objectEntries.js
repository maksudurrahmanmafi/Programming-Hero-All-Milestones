const object = {
    name: "Phone",
    brand: "Nokia",
    price: 1,
    available: '5p'
}

console.log(Object.keys(object)) // use for access keys

console.log(Object.values(object)) // use for access values
 
console.log(Object.entries(object)) // Access both key and value as a 2D array



console.log(delete object.available); //for delete object own property

console.log(object);

Object.freeze(object) // Can't add delete
Object.seal(object) // Only add can't delete
