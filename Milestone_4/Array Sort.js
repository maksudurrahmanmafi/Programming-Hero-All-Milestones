const names = ["Hamid","Kamid","Rahim","Abdul","Habdul","Babdul"]

names.sort()
console.log(names);
//Numbers are not automaticaly sort we have to compare it as a function

const numbers = [10,2,4,32,21,432,34,1,34,23,22]
// Assending sort
numbers.sort((a , b) => a - b)
console.log(numbers);

//Descending sort

numbers.sort((a , b) => b - a)
console.log(numbers);



