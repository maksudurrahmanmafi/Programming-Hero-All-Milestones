const users = [
  { id: 1, name: "Mafi", age: 22, salary: 30000, department: "CSE" },
  { id: 2, name: "Hasan", age: 19, salary: 25000, department: "EEE" },
  { id: 3, name: "Rafi", age: 25, salary: 40000, department: "CSE" },
  { id: 4, name: "Sakib", age: 21, salary: 35000, department: "BBA" },
  { id: 5, name: "Jui", age: 20, salary: 28000, department: "EEE" },
];

const userName = users.map((user)=> user.name)
console.log(userName);
const updateSalary = users.map((user)=>user.salary+5000);
console.log(updateSalary);
const userNameToUppercase = users.map((user)=> user.name.toUpperCase())
console.log(userNameToUppercase);
//create new obj use map
const createNewObj = users.map((user)=>({
    fullName:user.name,
   
    isAdult:user.age>=18
}))

console.log(users);

console.log(createNewObj);
