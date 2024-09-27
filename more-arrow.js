const difference = (x, y) => x-y;
const multiply = (first, second, third) => first * second * third;
//single parameter or one parameter;
const getage = (person)  => person.name;
const student = {name: 'atika', age: 30}
const result = getage(student);
console.log(result);


const getage3 = number => number[1];
const third = getage3([12, 54, 552]);
console.log(third);


const doubleIt = num => num * 2;
const double = doubleIt([3]);
console.log(double);

//no parameter;
const getPI = () => Math.PI
console.log(getPI());

//large arrow function;
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result;

}