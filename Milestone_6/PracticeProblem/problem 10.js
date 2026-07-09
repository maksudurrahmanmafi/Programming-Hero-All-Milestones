const users = [
  { name: "A", age: 18 },
  { name: "B", age: 19 },
  { name: "C", age: 25 },
  { name: "D", age: 30 }
];

const ans = users.find(age => age.age>20)
console.log(ans);
