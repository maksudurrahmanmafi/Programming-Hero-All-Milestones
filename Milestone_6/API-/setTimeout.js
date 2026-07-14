console.log(2);
console.log(4);


const id = setTimeout(() => {
  console.log(3);
}, 2000);
const id2 = setTimeout(() => {
  console.log(3);
}, 2000);
const id5 = setTimeout(() => {
  console.log(3);
}, 2000);
console.log(`id is ${id}`);
console.log(`id is ${id2}`);
console.log(`id is ${id5}`);
