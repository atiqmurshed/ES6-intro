//function declaration

// function add(a, b){
//     const result = a + b;
//     return result;
// }

function add(a, b){
    return a + b;
}

//function expression
const add2 = function(a, b){
    return a + b;
}
//arrow function;
const add3 = (a, b) => a + b;
const add4 = (num1, num2, num3, num4, num5) => num1 + num2 + num3 + num4 +num5;
const multiply = (num1, num2) => num1 * num2;

// const sum = add3(5, 62);
// const sum = add4(15, 5, 4, 7, 5)
// console.log(sum);
const mult = multiply(3, 30);
console.log(mult);

