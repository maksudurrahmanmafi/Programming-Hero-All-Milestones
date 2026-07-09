const numbers = [10, 20, 30, 40];

const total = numbers.reduce((acc,cur)=>{
    return acc+cur
},0)
console.log(total);
