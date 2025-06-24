
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return b !== 0 ? a / b : "Cannot divide by zero";
}

function modulus(a, b) {
  return a % b;
}
//g

function operateOnThree(a, b, fn1, fn2, fn3) {
  console.log("Using 3 functions:");
  console.log("Result 1:", fn1(a, b));
  console.log("Result 2:", fn2(a, b));
  console.log("Result 3:", fn3(a, b));
}


function operateOnFive(a, b, fn1, fn2, fn3, fn4, fn5) {
  console.log("Using 5 functions:");
  console.log("Result 1:", fn1(a, b));
  console.log("Result 2:", fn2(a, b));
  console.log("Result 3:", fn3(a, b));
  console.log("Result 4:", fn4(a, b));
  console.log("Result 5:", fn5(a, b));
}
//g

operateOnThree(10, 2, add, subtract, multiply);
console.log("----------");
operateOnFive(10, 2, add, subtract, multiply, divide, modulus);
