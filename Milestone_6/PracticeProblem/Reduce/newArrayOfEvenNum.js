const numbers = [1,2,3,4,5,6,7,8];
const evenNum = numbers.reduce((acc,cur)=>{
    // acc.push(cur%2===0)
    cur%2===0?acc.push(cur):0
    return acc
},[])
console.log(evenNum);
