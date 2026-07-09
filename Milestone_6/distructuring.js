// object distructuring

//One way we can access obj elements
const object = {
    name: "Phone",
    brand: "Nokia",
    price: 1,
    available: '5p'
}

console.log(object.name);
console.log(object.available);


//Distructuring

//we have to use same name as object keys name.we can change it use (:) it
const {phone:P,email} ={
    phone: 123,
    email: '!dfa@gamil'

}

console.log(P);//here we change the object key name
console.log(email);


