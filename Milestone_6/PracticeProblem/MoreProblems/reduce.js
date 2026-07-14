// সব salary-এর total বের করো।

const users = [
  { id: 1, name: "Mafi", age: 22, salary: 30000, department: "CSE" },
  { id: 2, name: "Hasan", age: 19, salary: 25000, department: "EEE" },
  { id: 3, name: "Rafi", age: 25, salary: 40000, department: "CSE" },
  { id: 4, name: "Sakib", age: 21, salary: 35000, department: "BBA" },
  { id: 5, name: "Jui", age: 20, salary: 28000, department: "EEE" },
];

const salary = users.reduce((acc,cur)=>{
     return acc+cur.salary
},0)
// console.log(salary);
// console.log(users.length);

const avgAge = users.reduce((acc,cur)=>{
    return acc+cur.age/users.length

},0)
// console.log(avgAge);

const maxSalary = users.reduce((acc,cur)=>{
    return cur.salary>acc?cur.salary:acc
},users[0].salary)
// console.log(maxSalary);

//Dept count
const deptCnt = users.reduce((acc,cur)=>{
    const dept = cur.department
    if(acc[dept]){
        acc[dept]++
    }
    else acc[dept] = 1
    return acc

},{})
// console.log(deptCnt);

//Dept salary count

const salary2 = users.reduce((acc,cur) =>{
    const dept = cur.department
    if(acc[dept]){
        acc[dept] += cur.salary
    }
    else acc[dept] = cur.salary
    return acc
},{})
console.log(salary2);

