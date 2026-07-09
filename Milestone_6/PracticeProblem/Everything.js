const employees = [
  { name: "Mafi", salary: 40000 },
  { name: "Jui", salary: 60000 },
  { name: "Hasan", salary: 35000 },
  { name: "Sakib", salary: 70000 },
];

employees.forEach((employe) => {
  console.log(employe.name);
});

const ans = employees.map((x) => x.salary);
console.log(ans);

const slaray = employees.filter((x) => x.salary > 50000);
console.log(slaray);

const first50 = employees.find((x) => x.salary >= 50000);
console.log(first50);
