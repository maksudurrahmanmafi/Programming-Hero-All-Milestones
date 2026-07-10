const words = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple"
];

const wordCount = words.reduce((acc,cur)=>{
  acc[cur] =(acc[cur]||0)+1
  return acc;
},{})
console.log(wordCount);
