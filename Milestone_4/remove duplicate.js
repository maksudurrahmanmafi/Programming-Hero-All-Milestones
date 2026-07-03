
function removeDuplicate(arr){
const newArr=[];

    for (const a of arr) {
        if(!newArr.includes(a)) newArr.push(a)
        
        
    }
    return newArr;

}
const arr = [10, 12, 3, 2, 1, 2, 3, 21, 2, 11, 2];
const arr2 = removeDuplicate(arr)
console.log(arr2);


