const arr = [1, 2, 3, 4, 5, 6]
const result = arr.map(x => x*2)
// console.log(result);

//Multiple  parameater

const arr2 = [1, 2, 3, 4, 5, 6]
const result2 = arr.map((x,index) => x*index)
// console.log(result2);


// String

const str = ['Mafi', 'Kafi', 'Lafi', 'Zafi']

const firstLatter = str.map( l => l[0].toString())
console.log(firstLatter);
