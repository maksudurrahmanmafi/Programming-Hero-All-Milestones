const numbers = [10, 50, 20, 80, 30];

const maximum = numbers.reduce((acc,cur)=>{
    return cur>acc?cur:acc;
},numbers[0])
console.log(maximum);
