const employees = [
  { name: "Mafi", salary: 40000 },
  { name: "Jui", salary: 60000 },
  { name: "Hasan", salary: 35000 },
];

const totalSalary = employees.reduce((acc, cur) => {
  return acc + cur.salary;
}, 0);
console.log(totalSalary);
