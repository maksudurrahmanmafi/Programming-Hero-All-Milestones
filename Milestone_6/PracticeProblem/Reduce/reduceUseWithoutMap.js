const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce((acc, cur) => {
  acc.push(cur * 2);

  return acc;
}, []);
console.log(result);
