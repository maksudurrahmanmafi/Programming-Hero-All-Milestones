const numbers = [2, 3, 4];


const result = numbers.reduce((acc,cur)=>{
    return acc*cur
},1)
console.log(result);
