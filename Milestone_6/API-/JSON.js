const studentObj = {
  name: "Mafi",
  email: "A@gmail.com",
};

//JSON a convert korar jonno JSON.stringify() use hoi

const ans = JSON.stringify(studentObj);
console.log(ans);

//JSON thake convert korar jonno JSON.parse() use hoi 
const JSONtoConvertObj = JSON.parse(ans)
console.log(JSONtoConvertObj);


