const users = [
  { id: 1, name: "Mafi", age: 22, salary: 30000, department: "CSE" },
  { id: 2, name: "Hasan", age: 19, salary: 25000, department: "EEE" },
  { id: 3, name: "Rafi", age: 25, salary: 40000, department: "CSE" },
  { id: 4, name: "Sakib", age: 21, salary: 35000, department: "BBA" },
  { id: 5, name: "Jui", age: 20, salary: 28000, department: "EEE" },
];

const ageGreater21 = users.filter((user) => user.age > 21);
console.log(ageGreater21);
const departmentCSE = users.filter(
  (user) => user.department.toLowerCase() === "cse",
);
console.log(departmentCSE);
const salary = users.filter((user) => user.salary > 30000);
console.log(salary);
const evenAge = users.filter((user) => user.age % 2 === 0);
console.log(evenAge);
const nameLength = users.filter(user=>user.name.length>4)
console.log(nameLength);
