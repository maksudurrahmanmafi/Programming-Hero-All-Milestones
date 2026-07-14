/* Question 1

Department EEE-এর প্রথম student বের করো।

Question 2

Age 20-এর user বের করো।

Question 3

Salary 35000-এর user বের করো।

Question 4

id = 5-এর user বের করো। */

const users = [
  { id: 1, name: "Mafi", age: 22, salary: 30000, department: "CSE" },
  { id: 2, name: "Hasan", age: 19, salary: 25000, department: "EEE" },
  { id: 3, name: "Rafi", age: 25, salary: 40000, department: "CSE" },
  { id: 4, name: "Sakib", age: 21, salary: 35000, department: "BBA" },
  { id: 5, name: "Jui", age: 20, salary: 28000, department: "EEE" },
];

const dept = users.find((user) => user.department.toUpperCase() === "EEE");
console.log(dept);
const age = users.find((user) => user.age === 20);
console.log(age);
const salary = users.find((user) => user.salary === 35000);
console.log(salary);

const id = users.find(user => user.id === 5);
console.log(id);
