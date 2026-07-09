const products = [
  { name: "Laptop", price: 70000, stock: 10 },
  { name: "Phone", price: 30000, stock: 0 },
  { name: "Mouse", price: 1000, stock: 25 },
  { name: "Keyboard", price: 2500, stock: 5 },
];

const mapArray = products.map((name) => name.name);
console.log(mapArray);

const stock = products.filter((stock) => stock.stock > 0);
console.log(stock);

const greater = products.find((greater) => greater.price > 5000);
console.log(greater);

products.forEach((product) => {
  console.log(`${product.name} - ${product.price}`);
});
