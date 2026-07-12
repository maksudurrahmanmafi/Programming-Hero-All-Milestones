const api = "https://jsonplaceholder.typicode.com/posts";
/* console.log(
  fetch(api)
    .then((response) => response.json())
    .then((data) => console.log(data)),
); */

//Button a click korar por load hobe data
/* const fetchApi = () => {
  fetch(api)
    .then((result) => result.json())
    .then((output) => console.log(output));
};
 */
//Button a click korar por akta akta kore load hobe

/* const arrayOfObj =()=>{
    fetch(api)
    .then(result => result.json())
    .then(output => secondFun(output))
}

const secondFun =(output)=>{
    output.forEach(post => {
        console.log(post);
        
    });
} */

//using js for show html content on ui

const arrayOfObj = () => {
  fetch(api)
    .then((post) => post.json())
    .then(htmlStyle);
};

const htmlStyle = (output) => {
  const ulTitle = document.getElementById("ul-items");
  ulTitle.innerHTML = "";

  output.forEach((post,index) => {
    const li = document.createElement("li");
    li.innerText = `${index + 1}. ${post.title} `;
    ulTitle.appendChild(li);
  });
};
