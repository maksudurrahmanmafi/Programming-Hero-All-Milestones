const students = [
  { name: "Mafi", department: "CSE" },
  { name: "Kafi", department: "EEE" },
  { name: "Hasan", department: "CSE" },
  { name: "Sakib", department: "BBA" },
  { name: "Rafi", department: "EEE" },
];

const department = students.reduce((acc, cur) => {
  if (!acc[cur.department]) {
    acc[cur.department] = [];
  }
  acc[cur.department].push(cur);
  return acc;
}, {});
console.log(department);
