const students = [
  { roll: 1, name: "A" },
  { roll: 2, name: "B" },
  { roll: 3, name: "C" },
  { roll: 4, name: "D" }
];

const ans = students.find(x => x.roll===3)
console.log(ans);
