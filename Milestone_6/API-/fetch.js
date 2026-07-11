const api = "https://jsonplaceholder.typicode.com/posts";
/* console.log(
  fetch(api)
    .then((response) => response.json())
    .then((data) => console.log(data)),
); */

//Button a click korar por load hobe data
const fetchApi = () => {
  fetch(api)
    .then((result) => result.json())
    .then((output) => console.log(output));
};

//Button a click korar por akta akta kore load hobe

const arrayOfObj =()=>{
    fetch(api)
    .then(result => result.json())
    .then(output => secondFun(output))
}

const secondFun =(output)=>{
    output.forEach(post => {
        console.log(post);
        
    });
}