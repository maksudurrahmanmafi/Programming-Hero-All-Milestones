const api = "https://jsonplaceholder.typicode.com/posts";
console.log(
  fetch(api)
    .then((response) => response.json())
    .then((data) => console.log(data)),
);
