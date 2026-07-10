/* function add(a, b) {
  return a + b;
}

function calculate(callback) {
  console.log(callback(10, 20));
}

calculate(add); */

function greet(name) {
    console.log("Hello " + name);
}

function execute(callback) {
    return callback;
}

const result = execute(greet);

result("Mafi");