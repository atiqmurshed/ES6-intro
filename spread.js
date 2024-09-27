const max = Math.max(120, 360, 54, 20, 800);
const numbers = [12, 21, 30, 6574, 82, 230, 7, 69, 50];
const arrayMax = Math.max(...numbers);
console.log(arrayMax);
// console.log(max);

const friends = [14, 51, 87, 25, 60, 80];
const bondhu = friends;

const dosto = [...friends];
console.log(dosto);
friends .push(250);
console.log(bondhu);
console.log(friends);
