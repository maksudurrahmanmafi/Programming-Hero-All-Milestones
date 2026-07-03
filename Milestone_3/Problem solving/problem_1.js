let experience = 2;
let startingSalary = 10000;

let currentSalary = startingSalary;

for (let i = 1; i <= experience; i++) {
    currentSalary *= 1.05;
}

console.log(`Current Salary: ${currentSalary.toFixed(2)}`);