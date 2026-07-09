const products = [
  { name: "Laptop", stock: 10 },
  { name: "Phone", stock: 5 },
  { name: "Mouse", stock: 20 }
];

const totalStock = products.reduce((acc,cur)=>{
    return acc+cur.stock
},0)
console.log(totalStock);
